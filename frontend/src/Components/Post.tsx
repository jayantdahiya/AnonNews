import React from 'react'
import { Button, Modal, TextInput, TextArea, FormItem, FileUploaderDropContainer } from '@carbon/react'

function Post () {
    const [open, setOpen] = React.useState(false)

    const postNews = () => {
        setOpen(true)
    }
  return (
    <>
    <div style={{
        position: 'fixed',
        bottom: '5rem',
        right: '5rem',
    }}>
        <Button onClick={postNews}>
            New Post
        </Button>
    </div>
    <Modal
     open={open}
     modalHeading="Post a new news"
     primaryButtonText="Post"
     secondaryButtonText="Cancel"
     onRequestClose={() => setOpen(false)}
    >
        <TextInput type="text" labelText="Heading of the news" />
        <br />
        <TextArea labelText="Content of the news" />
        <br />

        <FormItem>
  <p className="cds--file--label">
    Upload news image
  </p>
  <p className="cds--label-description">
    Supported file types are .jpg and .png.
  </p>
  <FileUploaderDropContainer
    accept={[
      'image/jpeg',
      'image/png'
    ]}
    innerRef={{
      current: '[Circular]'
    }}
    labelText="Drag and drop files here or click to upload"
    multiple
    name=""
    onAddFiles={function noRefCheck(){}}
    onChange={function noRefCheck(){}}
    role=""
  />
  <div
    className="cds--file-container"
    style={{
      width: '100%'
    }}
  />
</FormItem>
    </Modal>
    </>
  )
}

export default Post