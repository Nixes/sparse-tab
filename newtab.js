'use strict';

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

    /**
     * @param {Link[]} links
     */
    setLinks(links) {
        this.links = links;
        this.#render();
    }

    /**
     * @param {Link} link
     */
    #renderLink = (link) => {
        let htmlString = `<div class="link">
            <a href="${link.url}">
                <div class="link-icon-container"><img class="link-icon" src="${link.icon}"></div> 
                <p class="link-text">${link.title}</p>
            </a>
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

/**
 * not cross browser, this only works for chrome right now
 * @param {string} url
 * @returns {string}
 */
const getFaviconImageSrc = (url) => {
    return `chrome://favicon/size/48/${url}`;
};

window.onload = async () => {
    /**
     * @var {{title:string,url:string}[]}
     */
    const topSites = await browser.topSites.get();
    const links = topSites.map((topSite)=>{
        return new Link(topSite.title,topSite.url,getFaviconImageSrc(topSite.url));
    });
    const linksElement = document.getElementById('links');
    const linkManager = new LinkManager(linksElement,links);
};