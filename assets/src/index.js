import Geolocation from './components/Geolocation.js';
import GeolocationSurvey from './components/GeolocationSurvey.js';
import SelectionTool from './components/SelectionTool.js';
import SelectionInvert from './components/SelectionInvert.js';
import Snapping from './components/Snapping.js';
import Scaleline from './components/Scaleline.js';
import MousePosition from './components/MousePosition.js';
import Digitizing from './components/Digitizing.js';
import OverviewMap from './components/OverviewMap.js';
import FeatureToolbar from './components/FeatureToolbar.js';
import ReverseGeom from './components/edition/ReverseGeom.js';
import ActionSelector from './components/ActionSelector.js';
import Print from './components/Print.js';
import FullScreen from './components/FullScreen.js';

import { mainLizmap, mainEventDispatcher } from './modules/Globals.js';

lizMap.events.on({
    uicreated: () => {
        window.customElements.define('lizmap-geolocation', Geolocation);
        window.customElements.define('lizmap-geolocation-survey', GeolocationSurvey);
        window.customElements.define('lizmap-selection-tool', SelectionTool);
        window.customElements.define('lizmap-selection-invert', SelectionInvert);
        window.customElements.define('lizmap-snapping', Snapping);
        window.customElements.define('lizmap-scaleline', Scaleline);
        window.customElements.define('lizmap-mouse-position', MousePosition);
        window.customElements.define('lizmap-digitizing', Digitizing);
        if(mainLizmap.hasOverview){
            window.customElements.define('lizmap-overviewmap', OverviewMap);
        }
        window.customElements.define('lizmap-feature-toolbar', FeatureToolbar);
        window.customElements.define('lizmap-reverse-geom', ReverseGeom);
        window.customElements.define('lizmap-action-selector', ActionSelector);
        window.customElements.define('lizmap-print', Print);
        window.customElements.define('lizmap-fullscreen', FullScreen);

        lizMap.mainLizmap = mainLizmap;
        lizMap.mainEventDispatcher = mainEventDispatcher;
    }
});
