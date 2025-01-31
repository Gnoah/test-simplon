import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  render() {
    return (
        <footer class="page-footer font-small mdb-color pt-4" id="foot">
        
            <div class="container text-center text-md-left">
              <div class="row text-center text-md-left mt-3 pb-3">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Good Shop</h6>
                  <p>Test de evaluation Simplon.co
                  </p>
                </div>
        
                <hr class="w-100 clearfix d-md-none"/>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Menu</h6>
                  <p>
                    <a href="/Home">Home</a>
                  </p>
                  <p>
                    <a href="/Impact">Plat</a>
                  </p>
                  <p>
                    <a href="/Risk">Engredien</a>
                  </p>
                  <p>
                    <a href="/Resolve">Finding Resolve</a>
                  </p>
                </div>
        
                <hr class="w-100 clearfix d-md-none"/>
        
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                  <p>
                    <a href="https://fr.wikipedia.org/wiki/goodcooking">cooking</a>
                  </p>
                  <p>
                    <a href="https://fr.wikipedia.org/wiki/Madagascar">Reset</a>
                  </p>
                  <p>
                    <a href="https://fr.wikipedia.org/wiki/Madagascar_National_Parks">National</a>
                  </p>
                  <p>
                    <a href="https://en.wikipedia.org/wiki/Madagascar">Madagascar</a>
                  </p>
                </div>
        
                <hr class="w-100 clearfix d-md-none"/>
        
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i class="fas fa-home mr-3"></i> Antananarivo,101, MG</p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> ralahajanaharynoah@gmail.com</p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> + 261 34 97 230 75</p>
                  <p>
                    <i class="fas fa-print mr-3"></i> + 01 234 00 000 00</p>
                </div>
        
              </div>
        
              <hr/>
        
              <div class="row d-flex align-items-center">
        
                <div class="col-md-7 col-lg-8">
        
                  <p class="text-center text-md-left">© 2019 Copyright Geoffroy Noah TOLOJANAHARY(simplon):
                    <a>
                      <strong> Good Cooking</strong>
                    </a>
                  </p>
        
                </div>
                <div class="col-md-5 col-lg-4 ml-lg-0">
                  <div class="text-center text-md-right">
                    <ul class="list-unstyled list-inline">
                      {/* <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li> */}
                      <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
        
                </div>
        
              </div>
        
            </div>
        
          </footer>
    );
  }
  };

  export default Footer;