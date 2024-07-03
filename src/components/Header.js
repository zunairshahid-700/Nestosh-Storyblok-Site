import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = ({ menus, logo }) => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {logo ? (
            <img src={logo} alt="Logo" />
          ) : (
            <span>No Logo Available</span>
          )}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/what-we-do">What We Do</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/what-we-think">What We Think</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Who We Are
              </Link>
              <div className="dropdown-menu px-3 rounded-3 border-0 shadow">
                <div className="row">
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/category/television">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-warning-subtle rounded-3 fs-1">
                          <i className="bi bi-tv"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Television</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/category/headphones">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-danger-subtle rounded-3 fs-1">
                          <i className="bi bi-headphones"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Headphones</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/category/smartphone">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-success-subtle rounded-3 fs-1">
                          <i className="bi bi-phone"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Smartphone</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/category/laptop">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-secondary-subtle rounded-3 fs-1">
                          <i className="bi bi-laptop"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Laptop</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/category/smartwatch">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-body-tertiary rounded-3 fs-1">
                          <i className="bi bi-smartwatch"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Smartwatch</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/category/earbuds">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-info-subtle rounded-3 fs-1">
                          <i className="bi bi-earbuds"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Earbuds</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Careers
              </Link>
              <div className="dropdown-menu px-3 rounded-3 border-0 shadow">
                <div className="row">
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/careers/television">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-warning-subtle rounded-3 fs-1">
                          <i className="bi bi-tv"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Television</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/careers/headphones">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-danger-subtle rounded-3 fs-1">
                          <i className="bi bi-headphones"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Headphones</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/careers/smartphone">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-success-subtle rounded-3 fs-1">
                          <i className="bi bi-phone"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Smartphone</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/careers/laptop">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-secondary-subtle rounded-3 fs-1">
                          <i className="bi bi-laptop"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Laptop</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/careers/smartwatch">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-body-tertiary rounded-3 fs-1">
                          <i className="bi bi-smartwatch"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Smartwatch</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link className="dropdown-item" to="/careers/earbuds">
                      <div className="d-flex align-items-center py-3 px-1 rounded-3">
                        <div className="icon px-3 bg-info-subtle rounded-3 fs-1">
                          <i className="bi bi-earbuds"></i>
                        </div>
                        <div className="text ps-3">
                          <h5>Earbuds</h5>
                          <div>Irure incididunt eu irure quis ipsum occaecat dolor quis.</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
