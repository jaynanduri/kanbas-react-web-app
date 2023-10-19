function AssignmentActionButtons(){
    return (
        <div className="row mb-2">
            <div className="col mt-1">
                <input type="text" className="form-control w-75 inline border m-0" id="exampleFormControlInput1"
                       placeholder="Search for Assignment"/>
            </div>
            <div className="col">
                <div className="wd-course-action-buttons">
                    <button type="button" className="btn btn-light wd-custom-margin border float-end">
                        <i className="fa-solid fa-ellipsis-vertical wd-custom-margin"></i>
                    </button>
                    <button type="button" className="btn btn-danger float-end  border wd-custom-margin">
                        <i className="fa-solid fa-plus white"></i> Assignment
                    </button>
                    <button className="btn btn-light float-end border wd-custom-margin" type="button">
                        <i className="fa-solid fa-plus"></i> Group
                    </button>

                </div>
            </div>
        </div>
    );
}

export default AssignmentActionButtons;