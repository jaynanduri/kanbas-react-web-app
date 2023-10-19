function CourseStatus() {
    const courseStatus = ["Import Existing Content", "Import from Commons",
        "Choose from Home Page", "View Course Stream", "New Announcement", "New Analytics",
        "View Course Notifications"];
    return (
        <div className="col-3">
            <div className="wd-course-status">
                <h5><strong>Course Status</strong></h5>
                <div className="container-fluid mb-3">
                    <div className="row">
                        <div className="col-6 mb-2 p-0">
                            <button type="button" className="btn btn-light w-100 border">
                                <i className="fa-solid fa-ban"></i> Unpublish
                            </button>
                        </div>
                        <div className="col-6 mb-2 p-0">
                            <button type="button"
                                    className="btn btn-success disabled border w-100">
                                <i className="fa-solid fa-circle-check wd-color-white"></i> Publish
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {courseStatus.map((status, index) => (
                            <div className="col-12 mt-2 p-0">
                                <button type="button" className="btn btn-light wd-course-status-btn-sec border">
                                    {StatusIcons(status)} {status}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <h5><strong>To Do</strong></h5>
                <hr/>
                <div className="container-fluid mb-4">
                    <div className="row">
                        <div className="col-sm-1">
                            <i className="fa-solid fa-circle-exclamation wd-color-red"></i>
                        </div>
                        <div className="col-sm-11">
                            <i className="fa-solid fa-xmark grey float-end"></i>
                            <p className="wd-custom-font p-0 m-0">
                                Grade A1 - HTML
                            </p>
                            <p className="wd-custom-font-footer">100 points • Sep 18</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <h5><strong>Coming Up</strong></h5>
                        </div>
                        <div className="col-sm-6">
                            <i className="fa-regular fa-calendar-plus"></i>
                            <span className="wd-custom-font p-1">View calender</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container-fluid">
                    <div className="row p-3">
                        <div className="col-1">
                            <i className="fa-regular fa-calendar-plus wd"></i>
                        </div>
                        <div className="col-10">
                            <p className="wd-custom-font p-0 m-0">Lecture</p>
                            <p style={{color: "black"}} className="wd-custom-font p-0 m-0">CS5610.12631.202410</p>
                            <p className="wd-custom-font-footer p-0 m-0">Sept 11 at 11:45am</p>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-1">
                            <i className="fa-regular fa-calendar-plus wd"></i>
                        </div>
                        <div className="col-10">
                            <p className="wd-custom-font p-0 m-0">CS5610 06 SP23 Lecture</p>
                            <p style={{color: "black"}} className="wd-custom-font p-0 m-0">CS5610.12631.202410</p>
                            <p className="wd-custom-font-footer p-0 m-0">Sept 11 at 6pm</p>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col-12">
                            <p className="wd-custom-font p-0 m-0">12 More in the next week...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatusIcons (status) {
    // eslint-disable-next-line default-case
    switch (status){
        case "Import Existing Content": {
            return (<i className="fa-solid fa-file-import grey"></i>);
        }
        case "Import from Commons": {
            return (<i className="fa-solid fa-cloud-arrow-up"></i>);
        }
        case "Choose from Home Page": {
            return (<i className="fa-regular fa-life-ring"></i>);
        }
        case "View Course Stream": {
            return (<i className="fa-solid fa-chart-column"></i>);
        }
        case "New Announcement": {
            return (<i className="fa-solid fa-bullhorn"></i>);
        }
        case "New Analytics": {
            return (<i className="fa-solid fa-chart-column"></i>);
        }
        case "View Course Notifications": {
            return (<i className="fa-regular fa-bell"></i>);
        }
    }
}

export default CourseStatus;