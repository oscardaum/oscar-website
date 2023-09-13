class BlogTemplate extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		    <div id="footer">
    		    <p>© 2023 Oscar Daum</p>
    		</div>
		`
	}
}

customElements.define('blog-template', BlogTemplate)