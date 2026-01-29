import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-10 col-lg-8'>
          <div className='card shadow-lg border-0 rounded-4'>
            <div className='card-body p-5'>
              <h2 className='text-center fw-bold mb-2'>Admin Dashboard</h2>
              <p className='text-center text-muted mb-4'>
                Manage hotel rooms, bookings, and system operations
              </p>

              <hr />

              <div className='row mt-4 g-4'>
                {/* Manage Rooms */}
                <div className='col-md-6'>
                  <Link to='/existing-rooms' className='text-decoration-none'>
                    <div className='card h-100 border-0 shadow-sm admin-card'>
                      <div className='card-body text-center p-4'>
                        <div className='fs-1 mb-3 text-primary'>
                          <i className='bi bi-house-door-fill'></i>
                        </div>
                        <h5 className='fw-bold'>Manage Rooms</h5>
                        <p className='text-muted small'>
                          Add, update, delete and view hotel rooms
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Manage Bookings */}
                <div className='col-md-6'>
                  <Link
                    to='/existing-bookings'
                    className='text-decoration-none'
                  >
                    <div className='card h-100 border-0 shadow-sm admin-card'>
                      <div className='card-body text-center p-4'>
                        <div className='fs-1 mb-3 text-success'>
                          <i className='bi bi-calendar-check-fill'></i>
                        </div>
                        <h5 className='fw-bold'>Manage Bookings</h5>
                        <p className='text-muted small'>
                          View, manage and monitor customer bookings
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for hover animation */}
      <style>
        {`
					.admin-card {
						transition: all 0.3s ease-in-out;
						cursor: pointer;
					}
					.admin-card:hover {
						transform: translateY(-6px);
						box-shadow: 0 12px 25px rgba(0,0,0,0.12);
					}
				`}
      </style>
    </section>
  );
};

export default Admin;
