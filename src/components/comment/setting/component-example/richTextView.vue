<template>
  <div>
    2
     <quill-editor ref="myTextEditor"
                   v-model="content"
                   :options = "editorOption"
                   @change="onEditorChange($event)"
                   @blur="onEditorBlur($event)"
                   @focus="onEditorFocus($event)"
                   @ready="onEditorReady($event)">
  </quill-editor>

  </div>
</template>
<style>
  .ql-editor{
    min-height: 500px;
  }
  .ql-toolbar.ql-snow{
    text-align: left;
  }
</style>

<script>
  import { quillEditor } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  export default {
    components: {
      quillEditor
    },
    data() {
      return {
        content:"",
        editorOption: {
            placeholder: '请输入内容',
            theme: 'snow'
        }
      }
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
         console.log('editor change!', editor, html, text)
        this.content = html
      }
    }
  };
</script>
