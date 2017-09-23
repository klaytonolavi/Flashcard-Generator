function ClozeCard (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partialText = this.fullText.replace(this.cloze, "...");
    
    // checks to make sure the cloze matches
    if (!this.fullText.match(this.cloze)){
        throw new Error("Sorry, " + this.cloze + " does not appear in the full text");
    }
}
console.log("Cloze card is loaded.");

// exports the module for the cloze card.
module.exports = ClozeCard;