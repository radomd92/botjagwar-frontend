Vue.component('botjagwar-header', {
    template: function () {
        let s = `
<nav class="navbar navbar-expand-sm bg-light">
    <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="index.html">Main page</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="recent_changes.html">Recent Changes</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="dictionary.html">Dictionary</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="inconsistent_definitions.html">Inconsistent<br>definitions</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="convergent_translations.html">Convergent<br>translations</a>
        </li>

    </ul>
    <form class="form-inline" method='get' action='search.html' style="position: absolute;right: 5px;">
        <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"><a href="search.html">Search</a></span>
        </div>
        <input v-model='search_term' class="form-control mr-sm-2" type="search" name='term' placeholder="" aria-label="">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
    </form>
</nav>`;
        return s;
    }(),

    data: function () {
        return {
            search_term: ''
        }
    },

});
