function AssignmentEditorActionButtons() {
    return (
        <div className="row">
            <div className="col col-sm-12">
                <div className="wd-course-action-buttons">
                    <button type="button" className="btn btn-light float-end wd-custom-margin border">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <button type="button" className="btn btn-outline-light float-end wd-course-status-btn border">
                        <i className="fa-solid fa-check-circle wd-color-green"></i> <span className={"wd-color-green"}>Publish All</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AssignmentEditorActionButtons;