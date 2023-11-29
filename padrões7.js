// Classe Observer
class Observer {
    update() {
      throw new Error("O método update deve ser implementado nas classes concretas.");
    }
  }
  
  // Classe Subject
  class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify() {
      this.observers.forEach(observer => observer.update());
    }
  }
  
  // Classe Editor (Concrete Subject)
  class Editor extends Subject {
    constructor() {
      super();
      this.content = "";
    }
  
    open() {
      console.log("Editor aberto.");
      this.notify(); // Dispara o evento "open"
    }
  
    save() {
      console.log("Conteúdo salvo no arquivo.");
      this.notify(); // Dispara o evento "save"
    }
  
    getContent() {
      return this.content;
    }
  }
  
  // Subclasse TextEditor (Concrete Observer)
  class TextEditor extends Observer {
    constructor(editor) {
      super();
      this.editor = editor;
      this.lines = [];
    }
  
    update() {
      console.log("Conteúdo do Editor atualizado:");
      console.log(this.editor.getContent());
    }
  
    insertLine(lineNumber, text) {
      this.lines.splice(lineNumber - 1, 0, text);
      console.log(`Linha ${lineNumber} inserida: ${text}`);
    }
  
    removeLine(lineNumber) {
      const removedLine = this.lines.splice(lineNumber - 1, 1);
      console.log(`Linha ${lineNumber} removida: ${removedLine}`);
    }
  
    saveToFile() {
      // Lógica para salvar o conteúdo no arquivo (não implementado neste exemplo)
      console.log("Conteúdo salvo no arquivo.");
    }
  }
  
  // Exemplo de uso
  const editor = new Editor();
  const textEditor = new TextEditor(editor);
  
  editor.addObserver(textEditor);
  
  editor.open();
  
  let lineNumber = 1;
  let userInput = "";
  
  while (userInput !== "EOF") {
    userInput = prompt(`Digite o texto para a linha ${lineNumber} (ou "EOF" para encerrar):`);
    if (userInput !== "EOF") {
      textEditor.insertLine(lineNumber, userInput);
      lineNumber++;
    }
  }
  
  textEditor.saveToFile();
  