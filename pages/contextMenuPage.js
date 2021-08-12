const { I } = inject();

class ContextMenuPage {
    rectangle = '//div[@id="hot-spot"]';
}

module.exports = new ContextMenuPage();
module.exports.ContextMenuPage = ContextMenuPage;
