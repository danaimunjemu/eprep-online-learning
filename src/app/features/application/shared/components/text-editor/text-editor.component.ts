import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {

  public Editor = ClassicEditor;
  text = "";

  submit() {
    console.log(this.text);
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '20rem',
    maxHeight: '20rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    toolbarPosition: 'top',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };




  // OLD EDITOR




  @Input()
  inputString?: string;

  constructor() { }

  ngOnInit() {
  }

  executeCommand(command : string){
    document.execCommand(command, false, '');
    this.highlightEditorButtons();
  }

  keydown(){
    this.highlightEditorButtons();
  }


  highlightEditorButtons(){
    const isBold = document.queryCommandValue("bold");
    const isItalic = document.queryCommandValue("italic");
    const isUnderline = document.queryCommandValue("underline");

    const btnBold = document.getElementById('btnBold');
    const btnItalic = document.getElementById('btnItalic');
    const btnUnderline = document.getElementById('btnUnderline');

    if (isBold === 'true') {
      btnBold!.style.backgroundColor = "gray";
    } else {
      btnBold!.style.backgroundColor = "lightgray";
    }

    if (isItalic === 'true') {
      btnItalic!.style.backgroundColor = "gray";
    } else {
      btnItalic!.style.backgroundColor = "lightgray";
    }

    if (isUnderline === 'true') {
      btnUnderline!.style.backgroundColor = "gray";
    } else {
      btnUnderline!.style.backgroundColor = "lightgray";
    }
  }
}
