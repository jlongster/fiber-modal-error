To repro:

* Start the app with `npm start`
* Click anywhere outside the modal to try to close it
* You'll see an error

The problem is that `renderSubtreeIntoContainer` is returning null
instance of an instance. And this only happens on the first render, I
think, so we only hit this problem if we conditionally render the
Modal like `this.state.open && <Modal>` instead of `<Modal
open={this.state.open} />`.