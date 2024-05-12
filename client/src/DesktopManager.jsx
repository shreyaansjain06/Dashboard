import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import mona from './assets/images/mona.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBars,
  faCircle,
  faBell,
  faChevronCircleDown,
  faFilter,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import DataTable from './components/DataTable';
function DesktopManager({ data }) {
  return (
    <div className="d-flex box desktop-manager">
      <div className="p-4 p-md-3">
        <div className="logo">
          <span className="blue">a</span>
          <span className="me-2">da</span>
          <span className="blue">Manager</span>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Schedule
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Inbox
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active rounded">
              Tasks
              <span className="line"></span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              Reports
            </a>
          </li>
          <hr />

          <li className="pages text-muted">PAGES</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Calender
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              To-Do
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Ul Elements
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Table
            </a>
          </li>

          <hr />
          <li className="nav-item">
            <a href="#" className="nav-link">
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </div>

      <main className="">
        <div className="p-1 bg-white d-flex align-items-center">
          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="input-group ms-4">
            <div className=" grey d-flex input-group-prepend rounded-pill input_bar">
              <span className="ms-1 input-group-text border-0 rounded-pill grey">
                <FontAwesomeIcon icon={faSearch} />{' '}
              </span>
              <input
                type="text"
                className="input_bar_search form-control grey rounded-pill border-0"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mx-5">
            <div className="">
              <span className="small-bell fa-stack fa-3x" data-count="6">
                {' '}
                <FontAwesomeIcon
                  icon={faCircle}
                  className="fa-stack-2x"
                  style={{ color: 'transparent' }}
                />{' '}
                <FontAwesomeIcon
                  icon={faBell}
                  className="fa-stack-1x fa-inverse"
                  style={{ color: '#4880ff' }}
                />{' '}
              </span>
            </div>
            <div className=" mx-2 d-flex align-items-center">
              <img
                src={mona}
                alt="Mona Lisa"
                className="rounded-circle small-width"
              />
              <div className="d-flex flex-column">
                <b className="font-weight-bold"> User</b>
                <div className="small">Admin</div>
              </div>
            </div>
            <div className="ms-4">
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </div>
          </div>
        </div>
        <div className="grey main-content p-4 rounded">
          <h1 className="h2 p-2">Tasks</h1>
          <div className="d-flex mt-2 mb-4 mt-md-0 mb-md-3">
            <button type="button" className="btn btn-light border p-3 px-4  ">
              <FontAwesomeIcon icon={faFilter} />
            </button>
            <button type="button" className="btn btn-light border p-3 px-4  ">
              Filter By
            </button>
            <div class="dropdown">
              <button
                class="btn btn-light border p-3 px-4  dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Date
                <span class="ms-4">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-light border p-3 px-4  dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                People
                <span class="ms-4">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-light border p-3 px-4  dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tag
                <span class="ms-4">
                  <i class="bi bi-chevron-down"></i>
                </span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="btn btn-light btn-bg text-danger border p-3 px-4 "
            >
              <FontAwesomeIcon
                className="text-danger mx-2"
                icon={faRotateLeft}
              />{' '}
              Reset Filter
            </button>
          </div>

          <DataTable data={data} />
        </div>
      </main>
    </div>
  );
}

export default DesktopManager;
