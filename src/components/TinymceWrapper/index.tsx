import { forwardRef, ForwardedRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

// const TinymceWrapper = () => {
const TinymceWrapper = forwardRef((props, ref: ForwardedRef<any>) => {

  console.log(props)

  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  
  return (
    <>
    {
      !ref ?
        <></>
      :
        <Editor
          apiKey='lfp1sibdc44a0qoqpita2999rwr01nnq7abmtwh1pnhb8boe'
          onInit={(_evt, editor) => typeof ref === "function" ? ref(editor) : ref.current = editor}
          initialValue=""
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
    }
    </>
  );
})

export default TinymceWrapper