import React from 'react';
import SectionTitle from './SectionTitle';
import Blog from './Blog';


const Blogs = () => {
    return (
        <div>
            <div className="container">
                <SectionTitle sectionTitle = "Blogs"/>
                <div className="row blogs border border-1 rounded-1 d-flex justify-content-evenly py-4">
                    <div className="col-lg-5 text-light">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    <div className="col-lg-5 text-light">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    <div className="col-lg-5 text-light">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    <div className="col-lg-5 text-light">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    <div className="col-lg-5 text-light">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    <div className="col-lg-5 text-light">
                        <Blog
                        blogImg="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        blogDescription="Lorem ipsum dolor sit amet consectetur adipe iure laboriosam similique aliquam et A, at amet ratione magni fuga dignissimos ex voluptas, corrupti itaque quos hic eligendi dolore."
                        />
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Blogs;