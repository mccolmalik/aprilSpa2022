import html from "html-literal";
import { Links } from "../store";

export default Links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${Links.map(
        link => `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
      )}
    </ul>
  </nav>
  ;
`;
