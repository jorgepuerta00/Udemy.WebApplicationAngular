import {
    Component,
    AfterViewInit,
    EventEmitter,
    OnDestroy,
    Input,
    Output
  } from '@angular/core';
  
  @Component({
    selector: 'simple-tiny',
    template: `<textarea id="{{elementId}}"></textarea>`
  })

  export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Output() onEditorContentChange = new EventEmitter();
   
    editor;
   
    ngAfterViewInit() {
      tinymce.init({
        selector: '#' + this.elementId,
        plugins: ['link', 'table'],
        skin_url: 'assets/skins/ui/oxide-dark',
        setup: editor => {
          this.editor = editor;
          editor.on('keyup change', () => {
            const content = editor.getContent();
            this.onEditorContentChange.emit(content);
          });
        }
      });
    }
  
    ngOnDestroy() {
      tinymce.remove(this.editor);
    }
  }