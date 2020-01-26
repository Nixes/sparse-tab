class Link {
    /**
     * @var {string} title
     */
    title;
    /**
     * @var {string} url
     */
    url;

    /**
     * @var {string} url
     */
    icon;

    /**
     *
     * @param {string} title
     * @param {string} url
     * @param {string} icon
     */
    constructor(title,url,icon) {
        this.title = title;
        this.url = url;
        this.icon = icon;
    }
}

class LinkManager {
    /**
     * @var {Element}
     */
    rootElement;

    /**
     * @var {Link[]}
     */
    links;

    /**
     *
     * @param {Element} rootElement
     * @param {Link[]} links
     */
    constructor(rootElement,links) {
        this.rootElement = rootElement;
        this.setLinks(links);
    }

    setLinks(links) {
        this.links = links;
        this.#render();
    }

    /**
     * @param {Link} link
     */
    #renderLink = (link) => {
        let htmlString = `<div class="link">
            <a href="${link.url}">${link.title}</a>
        </div>`;
        return htmlString;
    };

    #render = () => {
        let htmlString = '';
        for (const link of this.links) {
            const linkHtml = this.#renderLink(link);
            htmlString += linkHtml;
        }

        this.rootElement.innerHTML=htmlString;
    }
}

// // mozilla and chrome have different namespaces for webextentions, WTF?
// const browser = chrome === null? browser : chrome;

window.onload = async () => {
    /**
     * @var {{title:string,url:string}[]}
     */
    const topSites = await browser.topSites.get();
    const links = topSites.map((topSite)=>{
        return new Link(topSite.title,topSite.url,'');
    });
    console.log("Topsites: ");
    console.log(topSites);
    const linksElement = document.getElementById('links');
    const linkManager = new LinkManager(linksElement,links);
};