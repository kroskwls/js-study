import { html, TemplateResult } from "../../../node_modules/lit-html/lit-html";
import { Message, MessageTypes } from "../../shared/messages";

export class Application implements Renderable<void> {
	private readonly node: BlockchainNode;
	private readonly server: WebsocketController;

	private readonly transactionForm = new this.transactionForm(this.requestRendering);
	private readonly pendingTransactionsPanel = new this.pendingTransactionsPanel(this.requestRendering);
	private readonly blocksPanel = new this.blocksPanel(this.requestRendering);

	constructor(readonly requestRendering: Callback) {
		this.server = new WebsocketController(this.handleServerMessages);
		this.node = new BlockchainNode();
		
		this.requestRendering();
		this.initializeBlockchain();
	}

	private async initializeBlockchain() {
		const blocks = await this.server.requestLongestChain();
		if (blocks.length > 0) {
			this.node.initializeBlockchain(blocks);
		} else {
			await this.node.initializeWithGenesisBlock();
		}

		this.requestRendering();
	}
	
	render(): TemplateResult {
		return html`
			<main>
				<h1>Blockchain node</h1>
				<aside>${this.statusLine}</aside>
				<section>${this.transactionForm.render(this.node)}</section>
				<section>
					<form @submit="${this.generateBlock}">
						${this.pendingTransactionsPanel.render(this.node)}
					</form>
				</section>
				<section>${this.blocksPanel.render(this.node.chain)}</section>
			</main>
		`;
	}

	private readonly handleServerMessages = (message: Message) => {
		switch(message.type) {
			case MessageTypes.GetLongestChainRequest: 
				return this.handleGetLongestChainRequest(message);
			case MessageTypes.NewBlockRequest:
				return this.handleNewBlockRequest(message);
			case MessageTypes.NewBlockAnnouncement:
				return this.handleNewBlockAnnouncement(message);
			default: {
				console.log(`Receive message of unknown type: "${message.type}"`);
			}
		}
	}
	
	private handleGetongestChainRequest(message: Message): void {
		this.server.send({
			type: MessageTypes.GetLongestChainResponse,
			correlationId: message.correlationId,
			payload: this.node.chain
		});
	}
}