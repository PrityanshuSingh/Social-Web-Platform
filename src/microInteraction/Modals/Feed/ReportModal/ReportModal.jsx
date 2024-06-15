import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Report from "./styles/ReportModal.module.css"; // Import the CSS module

function ReportModal({ isModalOpen, onClose, onConfirm }) {
  if (!isModalOpen) {
    return null;
  }

  return (
    <section className={Report.modal}>
      <article className={Report.modalContent}>
        <div className={Report.exitIcon}>
          <FontAwesomeIcon
            icon={faClose}
            className={Report.exitIcon}
            onClick={onClose}
          />        
        </div>
        <main className={Report.modalMainContents}>
          <h5 className={Report.modalTitle}>Confirm Report</h5>
          <hr />
          <div className={Report.modalText}>
            Are you sure you want to report this post?
          </div>
          <div className={Report.modalButtonContainer}>
            <button className={Report.cancelButton} onClick={onClose}>Cancel</button>
            <button className={Report.confirmButton} onClick={onConfirm}>Report</button>
          </div>
        </main>
      </article>
    </section>
  );
}

ReportModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ReportModal;
