import React from "react";
import "./assets/css/style.css";

function Footer() {
    return (
        <footer class="footer pt-3 w-100 ">
            <div class="container-fluid">
                <div class="row align-items-center justify-content-lg-between">
                    <div class="col-lg-6 mb-lg-0 mb-4">
                        <div class="copyright text-center text-sm text-muted text-lg-start">
                            © {new Date().getFullYear()}
                            made with <i class="fa fa-heart"></i> by &nbsp;
                            <a href="/" class="font-weight-bold" target="_blank">Reacter Tim</a>
                            for a better web.
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                            <li class="nav-item">
                                <a href="/" class="nav-link text-muted" target="_blank" rel="noopener noreferrer">Creative Tim</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link text-muted" target="_blank" rel="noopener noreferrer">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link text-muted" target="_blank" rel="noopener noreferrer">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link pe-0 text-muted" target="_blank" rel="noopener noreferrer">License</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;