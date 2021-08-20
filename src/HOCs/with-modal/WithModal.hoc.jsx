import { Modal } from "src/components/modal/Modal.component";

const WithModal = (WrappedComponent) => (props) => {
    const { isOpen, ...otherProps } = props;
    return isOpen ? (
        <Modal isOpen={true} handleModalClose={otherProps.handleModalClose}>
            <WrappedComponent {...otherProps} />
        </Modal>
    ) : null;
};

export default WithModal;