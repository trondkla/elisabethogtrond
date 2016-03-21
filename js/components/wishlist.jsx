var React = require('react');

var Spinner = React.createClass({
    render: function() {
        return (
            <li className="loading">
                <i className="fa fa-spin fa-spinner"></i>
            </li>);
    }
});

var Wish = React.createClass({
    firstImage: function() {
        var firstImage = this.props.image.length > 0 ? this.props.image[0] : "";
        var imageUrl = firstImage.length > 0 ? "https://elisabethogtrond-3291.restdb.io/media/" + firstImage + "/?s=t" : "";
        return imageUrl.length > 0 ? <img src={imageUrl} /> : "";
    },

    noHtml: function(text) {
        return text.replace(/<(?:.|\n)*?>/gm, '');
    },

    goToUrl: function() {
        if (this.props.url && this.props.url.length > 0) {
            window.open(this.props.url,'_blank');
        }
    },

    render: function () {
        return (
            <li>
                <article className="wish" onClick={this.goToUrl}>
                    <div className="image">
                    {this.firstImage()}
                    </div>
                    <section className="details">
                        <h3>{this.props.title}</h3>
                        <p>{this.noHtml(this.props.description)}</p>
                    </section>
                </article>
            </li>
        );
    }
});

var Wishlist = React.createClass({
    render: function () {
        var cssClasses = this.props.loading ? "" : "content";
        return (
            <ul className={cssClasses}>
                {this.props.loading ? <Spinner />: ""}
                {(this.props.wishes || []).map(function(wish, i) {
                return (
                    <Wish
                        data-id={wish._id}
                        key={i}
                        title={wish.title}
                        description={wish.description}
                        image={wish.image}
                        priority={wish.priority}
                        url={wish.url}
                     />
                );
            }, this)}
            </ul>
        );
    }
});

module.exports = Wishlist;
