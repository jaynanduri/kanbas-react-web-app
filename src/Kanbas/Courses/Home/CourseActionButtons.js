function CourseActionButtons(){
    return(
        <div className="row">
            <div className="wd-course-action-buttons">
                <button type="button" className="btn btn-light float-end wd-custom-margin border">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
                <button type="button" className="btn btn-danger float-end wd-custom-margin border">
                    <i className="fa-solid fa-plus white"></i> Module
                </button>

                <div className="dropdown float-end">
                    <button className="btn btn-light dropdown-toggle wd-custom-margin border" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-regular fa-check-circle wd-color-green"></i> Publish
                        All
                    </button>

                </div>
                <button type="button" className="btn btn-light float-end wd-custom-margin border">
                    View Progress
                </button>
                <button type="button" className="btn btn-light float-end wd-custom-margin border">
                    Collapse All
                </button>
            </div>
        </div>
    );
}
export default CourseActionButtons;