class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<a href="./" class="navbar-brand">Oscar Daum</a>
					<button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
					<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
						<div class="navbar-nav"> 
							<a href="./blog.html" class="nav-item nav-link">Blog</a>
							<a href="./library.html" class="nav-item nav-link">Library</a>
							<a  href="./resume.pdf" download  class="nav-item nav-link">Resume</a>
						</div>
					</div>
				</div>
			</nav>
		`
	}
}

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		    <div id="footer">
    		    <p>© 2023 Oscar Daum</p>
    		</div>
		`
	}
}



customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)