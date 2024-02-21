import React from 'react';

import "/src/components/Pages/admin/adminPanal.css"
import AdminUpdateForm from '../../Shared/AdminUpdateForm';

const AdminPanal = () => {
    return (
        <div className='bg-mid-night'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 py-5">
                        <AdminUpdateForm 
                        title = "Services" 
                        titleHolder = "Enter service title"  
                        titleDiscription = "Enter service description" />
                    </div>
                    


                    <div className="col-lg-12 py-5">
                        <AdminUpdateForm 
                        title = "Plans" 
                        titleHolder = "Enter plans title"  
                        titleDiscription = "Enter plans description" />
                    </div>


                    <div className="col-lg-12 py-5">
                        <AdminUpdateForm 
                        title = "Projects" 
                        titleHolder = "Enter project title"  
                        titleDiscription = "Enter protect description" />
                    </div>

                    <div className="col-lg-12 py-5">
                        <AdminUpdateForm 
                        title = "Accordion" 
                        titleHolder = "Enter accordion title"  
                        titleDiscription = "Enter accordion description" />
                    </div>



                </div>
            </div>
        </div>
    );
};

export default AdminPanal;