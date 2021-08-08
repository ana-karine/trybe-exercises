// https://www.digitalocean.com/community/tutorials/react-modal-component

import "./consolidated.css";

const Consolidated = ({ handleClose, display, children }) => {
  const showHideClassName = display
    ? "show display-block"
    : "show display-none";

  return (
    <div className={showHideClassName}>
      <section className="show-main">
        {children}
        <div className="spacebtn">
          <button className="btn" type="button" onClick={handleClose}>
            Fechar
          </button>
        </div>
      </section>
    </div>
  );
};

export default Consolidated;
