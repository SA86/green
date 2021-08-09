import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProvidersService } from '../providers.service';
import { Observable, throwError } from 'rxjs';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material';
import { MatChipInputEvent } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { Options, LabelType } from "@angular-slider/ngx-slider";
// import * as PostalCodeData from "./assets/postal-codes.json";
import * as PostalCodeData from "./postal-codes.json";
import { catchError, retry } from 'rxjs/operators';
import { find, pull, filter, times, constant, debounce, set, get, keyBy, reduce, cloneDeep, sortedUniq, sortBy, includes, chunk, sumBy, orderBy } from 'lodash';

interface Products {
	products: any;
	data: any;
	
}
interface DispensaryList {
	'name' : string;
	'value': any;
	'postal': number;
	'geo': object;
	'url': string;
}
// interface PostalCodes {
// 	key:  object;
// }
@Component({
	selector: 'app-all',
	templateUrl: './all.component.html',
	styleUrls: ['./all.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AllComponent implements OnInit {
	postalCodes: any = { "97001": { "lat": 44.990287, "long": -120.604029 }, "97002": { "lat": 45.240483, "long": -122.793841 }, "97004": { "lat": 45.254962, "long": -122.449377 }, "97005": { "lat": 45.490959, "long": -122.803586 }, "97006": { "lat": 45.517009, "long": -122.859817 }, "97007": { "lat": 45.454271, "long": -122.879619 }, "97008": { "lat": 45.46019, "long": -122.804198 }, "97009": { "lat": 45.422994, "long": -122.33277 }, "97011": { "lat": 45.387126, "long": -122.026423 }, "97013": { "lat": 45.220824, "long": -122.66828 }, "97014": { "lat": 45.568503, "long": -122.04471 }, "97015": { "lat": 45.413524, "long": -122.536758 }, "97016": { "lat": 46.060308, "long": -123.266951 }, "97017": { "lat": 45.176519, "long": -122.38969 }, "97018": { "lat": 45.899259, "long": -122.812218 }, "97019": { "lat": 45.515631, "long": -122.24273 }, "97020": { "lat": 45.222954, "long": -122.833621 }, "97021": { "lat": 45.385919, "long": -121.142379 }, "97022": { "lat": 45.346725, "long": -122.319961 }, "97023": { "lat": 45.278476, "long": -122.323188 }, "97024": { "lat": 45.546622, "long": -122.442346 }, "97026": { "lat": 45.106152, "long": -122.959936 }, "97027": { "lat": 45.38565, "long": -122.592827 }, "97028": { "lat": 45.288449, "long": -121.807282 }, "97029": { "lat": 45.287094, "long": -120.802277 }, "97030": { "lat": 45.509203, "long": -122.433468 }, "97031": { "lat": 45.626691, "long": -121.550386 }, "97032": { "lat": 45.17663, "long": -122.783877 }, "97033": { "lat": 45.280255, "long": -120.595882 }, "97034": { "lat": 45.409354, "long": -122.683468 }, "97035": { "lat": 45.413498, "long": -122.725171 }, "97037": { "lat": 45.067048, "long": -121.027621 }, "97038": { "lat": 45.095438, "long": -122.558954 }, "97039": { "lat": 45.451556, "long": -120.664859 }, "97040": { "lat": 45.617111, "long": -121.388115 }, "97041": { "lat": 45.436254, "long": -121.624789 }, "97042": { "lat": 45.207722, "long": -122.537224 }, "97045": { "lat": 45.320277, "long": -122.536467 }, "97048": { "lat": 46.044795, "long": -122.982023 }, "97049": { "lat": 45.345254, "long": -121.86274 }, "97050": { "lat": 45.67358, "long": -120.781632 }, "97051": { "lat": 45.875701, "long": -122.949006 }, "97053": { "lat": 45.827979, "long": -122.883286 }, "97054": { "lat": 45.942235, "long": -122.949588 }, "97055": { "lat": 45.388717, "long": -122.155068 }, "97056": { "lat": 45.772037, "long": -122.96941 }, "97057": { "lat": 45.002733, "long": -120.749973 }, "97058": { "lat": 45.536452, "long": -121.155254 }, "97060": { "lat": 45.531327, "long": -122.36909 }, "97062": { "lat": 45.369302, "long": -122.762307 }, "97063": { "lat": 45.224901, "long": -121.301127 }, "97064": { "lat": 45.859087, "long": -123.235518 }, "97065": { "lat": 45.607642, "long": -120.644619 }, "97067": { "lat": 45.297725, "long": -122.058958 }, "97068": { "lat": 45.352514, "long": -122.668534 }, "97070": { "lat": 45.306108, "long": -122.773066 }, "97071": { "lat": 45.134191, "long": -122.826487 }, "97080": { "lat": 45.478314, "long": -122.390727 }, "97086": { "lat": 45.445048, "long": -122.528173 }, "97089": { "lat": 45.426416, "long": -122.442992 }, "97101": { "lat": 45.090196, "long": -123.228702 }, "97102": { "lat": 45.795655, "long": -123.95982 }, "97103": { "lat": 46.133918, "long": -123.710609 }, "97106": { "lat": 45.665677, "long": -123.118977 }, "97107": { "lat": 45.552522, "long": -123.879381 }, "97108": { "lat": 45.268884, "long": -123.708784 }, "97109": { "lat": 45.737827, "long": -123.18121 }, "97110": { "lat": 45.901039, "long": -123.955401 }, "97111": { "lat": 45.284549, "long": -123.195186 }, "97112": { "lat": 45.271232, "long": -123.868472 }, "97113": { "lat": 45.497238, "long": -123.044336 }, "97114": { "lat": 45.187855, "long": -123.07657 }, "97115": { "lat": 45.275227, "long": -123.03946 }, "97116": { "lat": 45.580822, "long": -123.165693 }, "97117": { "lat": 45.631444, "long": -123.2879 }, "97118": { "lat": 45.560774, "long": -123.911344 }, "97119": { "lat": 45.468863, "long": -123.200213 }, "97121": { "lat": 46.171919, "long": -123.951838 }, "97122": { "lat": 45.161422, "long": -123.82578 }, "97123": { "lat": 45.440165, "long": -122.980083 }, "97124": { "lat": 45.569079, "long": -122.946701 }, "97125": { "lat": 45.671165, "long": -123.19698 }, "97127": { "lat": 45.246126, "long": -123.111352 }, "97128": { "lat": 45.211917, "long": -123.282091 }, "97130": { "lat": 45.671507, "long": -123.933418 }, "97131": { "lat": 45.736903, "long": -123.817024 }, "97132": { "lat": 45.324219, "long": -122.98733 }, "97133": { "lat": 45.702104, "long": -123.029779 }, "97134": { "lat": 45.457577, "long": -123.977041 }, "97135": { "lat": 45.221862, "long": -123.962705 }, "97136": { "lat": 45.630592, "long": -123.920769 }, "97137": { "lat": 45.219509, "long": -122.948493 }, "97138": { "lat": 45.853556, "long": -123.569342 }, "97140": { "lat": 45.35308, "long": -122.865845 }, "97141": { "lat": 45.510729, "long": -123.743368 }, "97144": { "lat": 45.741563, "long": -123.300243 }, "97145": { "lat": 45.851149, "long": -123.950728 }, "97146": { "lat": 46.129698, "long": -123.945911 }, "97147": { "lat": 45.688003, "long": -123.878633 }, "97148": { "lat": 45.358403, "long": -123.248478 }, "97149": { "lat": 45.112951, "long": -123.939044 }, "97201": { "lat": 45.507856, "long": -122.690794 }, "97202": { "lat": 45.482541, "long": -122.643935 }, "97203": { "lat": 45.603549, "long": -122.737905 }, "97204": { "lat": 45.518371, "long": -122.673946 }, "97205": { "lat": 45.520562, "long": -122.710231 }, "97206": { "lat": 45.482433, "long": -122.598605 }, "97208": { "lat": 45.528666, "long": -122.678981 }, "97209": { "lat": 45.531124, "long": -122.683951 }, "97210": { "lat": 45.544163, "long": -122.726626 }, "97211": { "lat": 45.581132, "long": -122.637305 }, "97212": { "lat": 45.544236, "long": -122.643468 }, "97213": { "lat": 45.538194, "long": -122.600014 }, "97214": { "lat": 45.514672, "long": -122.643014 }, "97215": { "lat": 45.515121, "long": -122.600627 }, "97216": { "lat": 45.513887, "long": -122.558403 }, "97217": { "lat": 45.601815, "long": -122.700798 }, "97218": { "lat": 45.576236, "long": -122.600873 }, "97219": { "lat": 45.454231, "long": -122.698526 }, "97220": { "lat": 45.550024, "long": -122.559297 }, "97221": { "lat": 45.498278, "long": -122.728839 }, "97222": { "lat": 45.440949, "long": -122.618111 }, "97223": { "lat": 45.44029, "long": -122.776604 }, "97224": { "lat": 45.405501, "long": -122.795056 }, "97225": { "lat": 45.502847, "long": -122.770212 }, "97227": { "lat": 45.543386, "long": -122.6781 }, "97229": { "lat": 45.551031, "long": -122.809275 }, "97230": { "lat": 45.557757, "long": -122.505268 }, "97231": { "lat": 45.687629, "long": -122.824209 }, "97232": { "lat": 45.528929, "long": -122.643927 }, "97233": { "lat": 45.515307, "long": -122.502168 }, "97236": { "lat": 45.483213, "long": -122.510515 }, "97239": { "lat": 45.489938, "long": -122.690453 }, "97266": { "lat": 45.482967, "long": -122.557619 }, "97267": { "lat": 45.408427, "long": -122.612867 }, "97301": { "lat": 44.94878, "long": -123.003655 }, "97302": { "lat": 44.903103, "long": -123.064528 }, "97303": { "lat": 45.030354, "long": -123.023689 }, "97304": { "lat": 45.006596, "long": -123.111691 }, "97305": { "lat": 45.014338, "long": -122.928719 }, "97306": { "lat": 44.842904, "long": -123.094751 }, "97317": { "lat": 44.902603, "long": -122.907374 }, "97321": { "lat": 44.65345, "long": -123.139526 }, "97322": { "lat": 44.627553, "long": -123.017613 }, "97324": { "lat": 44.364996, "long": -123.623152 }, "97325": { "lat": 44.833821, "long": -122.85223 }, "97326": { "lat": 44.619481, "long": -123.602815 }, "97327": { "lat": 44.375035, "long": -122.947586 }, "97329": { "lat": 44.411265, "long": -122.38462 }, "97330": { "lat": 44.647997, "long": -123.259576 }, "97331": { "lat": 44.564604, "long": -123.280419 }, "97333": { "lat": 44.468069, "long": -123.293831 }, "97338": { "lat": 44.926618, "long": -123.347413 }, "97341": { "lat": 44.809324, "long": -124.051239 }, "97342": { "lat": 44.739272, "long": -121.878966 }, "97343": { "lat": 44.575254, "long": -123.75149 }, "97344": { "lat": 44.869102, "long": -123.464616 }, "97345": { "lat": 44.411545, "long": -122.578909 }, "97346": { "lat": 44.788363, "long": -122.335327 }, "97347": { "lat": 45.077114, "long": -123.656393 }, "97348": { "lat": 44.383294, "long": -123.122261 }, "97350": { "lat": 44.631459, "long": -121.86376 }, "97351": { "lat": 44.815295, "long": -123.129486 }, "97352": { "lat": 44.749395, "long": -123.027593 }, "97355": { "lat": 44.532241, "long": -122.821044 }, "97357": { "lat": 44.752668, "long": -123.825597 }, "97358": { "lat": 44.804124, "long": -122.413624 }, "97360": { "lat": 44.76627, "long": -122.499397 }, "97361": { "lat": 44.766836, "long": -123.344975 }, "97362": { "lat": 45.063492, "long": -122.77131 }, "97364": { "lat": 44.99886, "long": -123.986853 }, "97365": { "lat": 44.666397, "long": -124.010783 }, "97366": { "lat": 44.575679, "long": -124.058352 }, "97367": { "lat": 44.914756, "long": -123.974231 }, "97368": { "lat": 45.024376, "long": -123.903116 }, "97369": { "lat": 44.761507, "long": -124.051772 }, "97370": { "lat": 44.563748, "long": -123.445455 }, "97371": { "lat": 44.990697, "long": -123.190756 }, "97373": { "lat": 45.05704, "long": -122.771754 }, "97374": { "lat": 44.675912, "long": -122.778135 }, "97375": { "lat": 44.977323, "long": -122.596342 }, "97376": { "lat": 44.498235, "long": -123.975013 }, "97377": { "lat": 44.463294, "long": -123.105998 }, "97378": { "lat": 45.070687, "long": -123.421129 }, "97380": { "lat": 44.786018, "long": -123.929969 }, "97381": { "lat": 44.939469, "long": -122.720723 }, "97383": { "lat": 44.794464, "long": -122.721862 }, "97384": { "lat": 44.790993, "long": -122.618879 }, "97385": { "lat": 44.865853, "long": -122.72355 }, "97386": { "lat": 44.359177, "long": -122.727043 }, "97388": { "lat": 44.903514, "long": -124.017859 }, "97389": { "lat": 44.533484, "long": -123.089786 }, "97390": { "lat": 44.309413, "long": -123.828824 }, "97391": { "lat": 44.624538, "long": -123.898368 }, "97392": { "lat": 44.795611, "long": -122.930376 }, "97394": { "lat": 44.443864, "long": -123.907156 }, "97396": { "lat": 45.104595, "long": -123.549273 }, "97401": { "lat": 44.067988, "long": -123.080181 }, "97402": { "lat": 44.047736, "long": -123.230905 }, "97403": { "lat": 44.035821, "long": -123.052976 }, "97404": { "lat": 44.105457, "long": -123.133235 }, "97405": { "lat": 43.939557, "long": -123.192759 }, "97406": { "lat": 42.615862, "long": -124.021255 }, "97408": { "lat": 44.142995, "long": -123.058241 }, "97410": { "lat": 42.79894, "long": -123.147871 }, "97411": { "lat": 43.075636, "long": -124.359381 }, "97412": { "lat": 44.204915, "long": -123.548069 }, "97413": { "lat": 44.124779, "long": -122.072275 }, "97414": { "lat": 42.961295, "long": -124.203481 }, "97415": { "lat": 42.084386, "long": -124.174762 }, "97416": { "lat": 43.034121, "long": -123.686734 }, "97417": { "lat": 42.947656, "long": -123.230688 }, "97419": { "lat": 44.180778, "long": -123.413186 }, "97420": { "lat": 43.350966, "long": -124.136922 }, "97423": { "lat": 43.193667, "long": -124.173269 }, "97424": { "lat": 43.74081, "long": -123.018593 }, "97426": { "lat": 43.89893, "long": -123.029954 }, "97429": { "lat": 42.968299, "long": -123.0635 }, "97430": { "lat": 44.17484, "long": -123.705193 }, "97431": { "lat": 43.869538, "long": -122.84149 }, "97434": { "lat": 43.621289, "long": -122.70322 }, "97435": { "lat": 43.690204, "long": -123.328474 }, "97436": { "lat": 43.640015, "long": -123.584772 }, "97437": { "lat": 44.09311, "long": -123.408747 }, "97438": { "lat": 43.944242, "long": -122.682456 }, "97439": { "lat": 44.090182, "long": -124.048338 }, "97441": { "lat": 43.751829, "long": -124.166146 }, "97442": { "lat": 42.780374, "long": -123.425369 }, "97443": { "lat": 43.250484, "long": -123.004257 }, "97444": { "lat": 42.506103, "long": -124.337299 }, "97446": { "lat": 44.260727, "long": -123.054648 }, "97447": { "lat": 43.155248, "long": -122.210461 }, "97448": { "lat": 44.208328, "long": -123.279908 }, "97449": { "lat": 43.563367, "long": -124.040505 }, "97450": { "lat": 42.905939, "long": -124.397057 }, "97451": { "lat": 43.815227, "long": -123.268019 }, "97452": { "lat": 43.874112, "long": -122.750081 }, "97453": { "lat": 43.980238, "long": -123.850173 }, "97454": { "lat": 44.221508, "long": -122.821646 }, "97455": { "lat": 43.968553, "long": -122.919656 }, "97456": { "lat": 44.339248, "long": -123.366418 }, "97457": { "lat": 43.064514, "long": -123.229472 }, "97458": { "lat": 43.048844, "long": -124.008543 }, "97459": { "lat": 43.484217, "long": -124.182735 }, "97461": { "lat": 44.108529, "long": -123.479762 }, "97462": { "lat": 43.489968, "long": -123.379201 }, "97463": { "lat": 43.740681, "long": -122.387167 }, "97465": { "lat": 42.763521, "long": -124.344681 }, "97466": { "lat": 42.848945, "long": -124.085233 }, "97467": { "lat": 43.815887, "long": -123.823914 }, "97469": { "lat": 42.910677, "long": -123.445884 }, "97470": { "lat": 43.250675, "long": -123.242413 }, "97471": { "lat": 43.218335, "long": -123.487741 }, "97473": { "lat": 43.67591, "long": -123.852596 }, "97476": { "lat": 42.842229, "long": -124.402796 }, "97477": { "lat": 44.058465, "long": -123.011597 }, "97478": { "lat": 44.089156, "long": -122.842269 }, "97479": { "lat": 43.39035, "long": -123.208305 }, "97480": { "lat": 44.122276, "long": -123.825169 }, "97481": { "lat": 43.115279, "long": -123.56598 }, "97484": { "lat": 42.940021, "long": -122.8503 }, "97486": { "lat": 43.383323, "long": -123.531642 }, "97487": { "lat": 43.988768, "long": -123.38721 }, "97488": { "lat": 44.128632, "long": -122.417466 }, "97489": { "lat": 44.164724, "long": -122.620682 }, "97490": { "lat": 44.00414, "long": -123.612013 }, "97492": { "lat": 43.718382, "long": -122.484809 }, "97493": { "lat": 43.889588, "long": -124.024907 }, "97494": { "lat": 43.330404, "long": -123.328081 }, "97495": { "lat": 43.281038, "long": -123.315196 }, "97496": { "lat": 43.066483, "long": -123.472707 }, "97497": { "lat": 42.665706, "long": -123.425495 }, "97498": { "lat": 44.284611, "long": -124.022676 }, "97499": { "lat": 43.595025, "long": -123.248065 }, "97501": { "lat": 42.265992, "long": -122.900842 }, "97502": { "lat": 42.414574, "long": -122.954536 }, "97503": { "lat": 42.604691, "long": -122.923719 }, "97504": { "lat": 42.327947, "long": -122.800496 }, "97520": { "lat": 42.182373, "long": -122.577113 }, "97522": { "lat": 42.574815, "long": -122.530566 }, "97523": { "lat": 42.123094, "long": -123.566871 }, "97524": { "lat": 42.467463, "long": -122.647726 }, "97525": { "lat": 42.450689, "long": -123.060929 }, "97526": { "lat": 42.535682, "long": -123.338285 }, "97527": { "lat": 42.37114, "long": -123.413622 }, "97530": { "lat": 42.152148, "long": -123.057499 }, "97531": { "lat": 42.199844, "long": -123.645659 }, "97532": { "lat": 42.573758, "long": -123.521009 }, "97534": { "lat": 42.118976, "long": -123.786285 }, "97535": { "lat": 42.267738, "long": -122.811447 }, "97536": { "lat": 42.781908, "long": -122.494698 }, "97537": { "lat": 42.546408, "long": -123.13782 }, "97538": { "lat": 42.270542, "long": -123.56742 }, "97539": { "lat": 42.576424, "long": -122.786219 }, "97540": { "lat": 42.192697, "long": -122.817256 }, "97541": { "lat": 42.774879, "long": -122.755413 }, "97543": { "lat": 42.375062, "long": -123.562128 }, "97544": { "lat": 42.161377, "long": -123.302418 }, "97601": { "lat": 42.443499, "long": -122.07558 }, "97603": { "lat": 42.152018, "long": -121.683526 }, "97604": { "lat": 42.953862, "long": -122.213146 }, "97620": { "lat": 42.204181, "long": -119.78788 }, "97621": { "lat": 42.469228, "long": -121.293655 }, "97622": { "lat": 42.419191, "long": -121.026234 }, "97623": { "lat": 42.202156, "long": -121.271139 }, "97624": { "lat": 43.003246, "long": -121.635689 }, "97625": { "lat": 42.31477, "long": -121.58089 }, "97626": { "lat": 42.66735, "long": -122.02791 }, "97627": { "lat": 42.140336, "long": -122.049929 }, "97630": { "lat": 42.331353, "long": -120.367452 }, "97632": { "lat": 42.036487, "long": -121.433906 }, "97633": { "lat": 42.03414, "long": -121.562829 }, "97634": { "lat": 42.128304, "long": -121.814925 }, "97635": { "lat": 41.929992, "long": -120.294195 }, "97636": { "lat": 42.616637, "long": -120.514464 }, "97637": { "lat": 42.703377, "long": -119.890062 }, "97638": { "lat": 43.135955, "long": -120.987247 }, "97639": { "lat": 42.447776, "long": -121.429035 }, "97640": { "lat": 42.847889, "long": -120.66334 }, "97641": { "lat": 43.260266, "long": -120.513837 }, "97701": { "lat": 44.112338, "long": -121.20634 }, "97702": { "lat": 44.000626, "long": -121.233812 }, "97707": { "lat": 43.826223, "long": -121.492124 }, "97710": { "lat": 42.174574, "long": -118.470845 }, "97711": { "lat": 44.705249, "long": -120.66431 }, "97712": { "lat": 43.789447, "long": -120.456155 }, "97720": { "lat": 43.585167, "long": -118.887819 }, "97721": { "lat": 42.526339, "long": -118.446078 }, "97722": { "lat": 42.94809, "long": -118.716044 }, "97730": { "lat": 44.502297, "long": -121.647176 }, "97731": { "lat": 43.145997, "long": -121.79748 }, "97732": { "lat": 43.39729, "long": -118.443106 }, "97733": { "lat": 43.371249, "long": -121.999522 }, "97734": { "lat": 44.542438, "long": -121.336146 }, "97735": { "lat": 43.41069, "long": -120.926174 }, "97736": { "lat": 42.741882, "long": -119.006803 }, "97737": { "lat": 43.49688, "long": -121.743673 }, "97738": { "lat": 43.484045, "long": -119.156464 }, "97739": { "lat": 43.694658, "long": -121.460906 }, "97741": { "lat": 44.657725, "long": -121.054464 }, "97750": { "lat": 44.658141, "long": -120.196695 }, "97751": { "lat": 44.1455, "long": -119.869134 }, "97752": { "lat": 44.14292, "long": -120.254389 }, "97753": { "lat": 44.240512, "long": -121.018129 }, "97754": { "lat": 44.15964, "long": -120.585505 }, "97756": { "lat": 44.283326, "long": -121.216724 }, "97758": { "lat": 43.338744, "long": -119.872224 }, "97759": { "lat": 44.500616, "long": -121.898499 }, "97760": { "lat": 44.376205, "long": -121.243587 }, "97761": { "lat": 44.838526, "long": -121.261509 }, "97801": { "lat": 45.670806, "long": -118.823573 }, "97810": { "lat": 45.713979, "long": -118.457961 }, "97812": { "lat": 45.575159, "long": -120.249897 }, "97813": { "lat": 45.850406, "long": -118.528084 }, "97814": { "lat": 44.827571, "long": -117.757799 }, "97817": { "lat": 44.72877, "long": -118.605928 }, "97818": { "lat": 45.785367, "long": -119.890171 }, "97819": { "lat": 44.485347, "long": -117.760392 }, "97820": { "lat": 44.072549, "long": -119.472928 }, "97823": { "lat": 45.239934, "long": -120.216766 }, "97824": { "lat": 45.354301, "long": -117.75647 }, "97825": { "lat": 44.385126, "long": -119.496273 }, "97826": { "lat": 45.664296, "long": -119.232316 }, "97827": { "lat": 45.575424, "long": -117.83805 }, "97828": { "lat": 45.716563, "long": -117.221992 }, "97830": { "lat": 44.966553, "long": -120.183153 }, "97833": { "lat": 44.928889, "long": -118.014879 }, "97834": { "lat": 44.972275, "long": -117.161191 }, "97835": { "lat": 45.910007, "long": -118.786544 }, "97836": { "lat": 45.321152, "long": -119.47462 }, "97837": { "lat": 44.556661, "long": -118.067106 }, "97838": { "lat": 45.853004, "long": -119.287265 }, "97839": { "lat": 45.591171, "long": -119.59304 }, "97840": { "lat": 44.884599, "long": -116.918444 }, "97841": { "lat": 45.465116, "long": -117.944925 }, "97842": { "lat": 45.399271, "long": -116.736989 }, "97843": { "lat": 45.502322, "long": -119.902866 }, "97844": { "lat": 45.88415, "long": -119.548836 }, "97845": { "lat": 44.401824, "long": -118.90306 }, "97846": { "lat": 45.462699, "long": -117.039586 }, "97848": { "lat": 44.722177, "long": -119.580554 }, "97850": { "lat": 45.303538, "long": -118.113278 }, "97856": { "lat": 44.815212, "long": -119.125255 }, "97857": { "lat": 45.384667, "long": -117.480138 }, "97859": { "lat": 45.526719, "long": -118.421455 }, "97862": { "lat": 45.922063, "long": -118.316063 }, "97864": { "lat": 44.805466, "long": -119.435932 }, "97865": { "lat": 44.461466, "long": -119.18004 }, "97867": { "lat": 45.077654, "long": -117.993762 }, "97868": { "lat": 45.409294, "long": -118.853582 }, "97869": { "lat": 44.397563, "long": -118.633979 }, "97870": { "lat": 44.787989, "long": -117.186563 }, "97873": { "lat": 44.132013, "long": -119.002884 }, "97874": { "lat": 44.777573, "long": -119.867594 }, "97875": { "lat": 45.818549, "long": -119.132853 }, "97876": { "lat": 45.516439, "long": -118.035678 }, "97877": { "lat": 44.711742, "long": -118.410517 }, "97880": { "lat": 45.088669, "long": -118.882506 }, "97882": { "lat": 45.897431, "long": -119.366071 }, "97883": { "lat": 45.192423, "long": -117.634155 }, "97884": { "lat": 44.455344, "long": -118.22223 }, "97885": { "lat": 45.655669, "long": -117.511704 }, "97886": { "lat": 45.802308, "long": -118.27241 }, "97901": { "lat": 43.621445, "long": -117.107275 }, "97903": { "lat": 44.246805, "long": -117.646977 }, "97904": { "lat": 43.886179, "long": -118.522929 }, "97905": { "lat": 44.57382, "long": -117.459512 }, "97906": { "lat": 43.537039, "long": -117.774678 }, "97907": { "lat": 44.419501, "long": -117.345514 }, "97908": { "lat": 44.312378, "long": -117.927886 }, "97909": { "lat": 44.246692, "long": -117.418958 }, "97910": { "lat": 42.749076, "long": -117.511459 }, "97911": { "lat": 43.736482, "long": -118.041388 }, "97913": { "lat": 43.613589, "long": -117.323286 }, "97914": { "lat": 44.113619, "long": -117.084162 }, "97918": { "lat": 44.037114, "long": -117.351072 }, "97920": { "lat": 44.072181, "long": -117.854282 } };
	// postalCodes: PostalCodes[] = PostalCodeData; 
	pageEvent: PageEvent;
	dispensary = new FormControl();
	formSearch: FormGroup = new FormGroup({});
	search: string = '';
	postal: number = 97006;
	range: number = 5;
	pageSize: number = 125;
	pageSizeOptions = [5, 10, 25, 100, 125, 200, 500, 1000];
	currentPage = 0;
	originalProducts: any;
	products: any;
	productsChunks: any;
	productCount: number;
	productBank = [];
	loading:boolean = true;
	// menu display
	menuQuickFiltersView: boolean = false;
	menuSearchView: boolean = false;
	menuLocationView: boolean = false;
	menuPricingView: boolean = false;
	menuSortView: boolean = false;
	menuDistanceView: boolean = true;
	distanceDispensaryResults: object = [];
	quickStrainSorts = [
		'Bio Diesel',
		'Blue',
		'Cheese',
		'Cherry',
		'Cookies',
		'Cooks',
		'Dawg',
		'Diesel',
		'GDP',
		'Grape',
		'GMO',
		'GSC',
		'Kush',
		'MAC',
		'Orange',
		'Pineapple',
		'PHK',
		'Purple',
		'Strawberry',
		'Zkittles'
	];
	quickTypesSorts = [ 'Badder', 'Crumble', 'Diamonds', 'Live Resin', 'Rosin', 'RSO', 'Sauce', 'Shatter', 'Sugar' ];
	sortStrainMap = []; // strain quick sorts
	sortTypeMap = []; // type quick sorts
	saleItems: any;
	bestSaleItems: any;
	removable: boolean = true;
	minValue: number = 1;
	maxValue: number = 120;
	soptions: Options = {
		floor: 0,
		ceil: 120,
		translate: (value: number, label: LabelType): string => {
			switch (label) {
				case LabelType.Low:
					return "<b>Min:</b> $" + value;
				case LabelType.High:
					return "<b>Max:</b> $" + value;
				default:
					return "$" + value;
			}
		}
	};	
	productFilters: any = {
		'quick': ['strain', 'types'],
		// 
		'query': '%string%',
		// locations, pricerange, distance
		'locations': '',
		// quick, pricerange
		'pricerange': [1,120],
		// quick, locations, distance
		'cost': ['sales', 'low/high'],
		// locations, pricesrange, distance
		'distance': []
		// pricesrange
	};			
	
	dispensaryList: DispensaryList[] = [
		{ 'name': 'Cannabis Nation-Beaverton', 'value': 'acMFAfbvyQ9CKsrNy', 'postal': 97006, 'geo':[45.5203821,-122.8431368], 'url':'dat'  },
		{ 'name': 'Nectar-Aloha', 'value': 'YbTHoLFPigH4scErj', 'postal': 97006, 'geo':[45.4966407,-122.8912542], 'url':'dat'  },
		{ 'name': 'Nectar-Beaverton-Allen', 'value': 'CAcMm4qtR9t29dzg6', 'postal': 97005, 'geo':[45.4766619,-122.8250877], 'url':'dat'  },
		{ 'name': 'Nectar-Beaverton-Hall', 'value': 'cynASLBsrjDueyH3A', 'postal': 97008, 'geo':[45.457036,-122.7856972], 'url':'dat'},
		{ 'name': 'Nectar-Regatta', 'value': '5f6bdb8157c27500f22d66ea', 'postal': 97006, 'geo':[45.5160132,-122.8435447], 'url':'dat'  },
		{ 'name': 'Kaleafa-Beaverton', 'value': 'KaleafaBeaverton', 'postal': 97005, 'geo':[45.4862895,-122.7912229], 'url':'dat'  },
		{ 'name': 'Broadway-Beaverton', 'value': '605b64fa3da35500d1dd9d05', 'postal': 97005, 'geo':[45.4862065,-122.7813575], 'url':'dat'  },
		{ 'name': 'Electric Lettuce-Beaverton', 'value': '5e7b8808bf130d00a8f6bd30', 'postal': 97008, 'geo':[45.4695997,-122.7862657], 'url':'dat'},
		{ 'name': 'Growing Releaf-Beaverton', 'value': 115818, 'postal': 97005, 'geo':[45.4899831,-122.7907909], 'url':'dat'},
		{ 'name': 'Green Planet-Beaverton', 'value': 107819, 'postal': 97005, 'geo':[45.4928959,-122.7829708], 'url':'dat'},
		{ 'name': 'Stone Age-Beaverton', 'value': 123946, 'postal': 97225, 'geo':[45.498724,-122.767445], 'url':'dat'},
		{ 'name': 'Oregon Bud Comp-Beaverton', 'value': 'OregonBudBeaverton', 'postal': 97005, 'geo':[45.496279,-122.8103849], 'url':'dat'},
		{ 'name': 'LaMota-Beaverton', 'value': 'oJN2QYZJHAxvBDWrL', 'postal': 97003, 'geo':[45.4930636,-122.855204], 'url':'dat'  },
		{ 'name': 'Electric Lettuce-CedarHills', 'value': '5e7b8dfe49f75e00bbdb7b9e', 'postal': 97225, 'geo':[45.5093087,-122.7853587], 'url':'dat'  },
		{ 'name': 'Green Mart-CedarHills', 'value': 143818, 'postal': 97005, 'geo':[45.5027025,-122.8104366], 'url':'dat'  },
		{ 'name': 'Western Oregon-CedarHills', 'value': 301745, 'postal': 97229, 'geo':[45.4798169,-122.8497282], 'url':'dat'  },
		{ 'name': 'Kaleafa-Hillsboro', 'value': 'KaleafaHillsboro', 'postal': 97123, 'geo':[45.5178175,-122.9963372], 'url':'dat'  },
		{ 'name': 'Mr NiceGuy-Hillsboro', 'value': '6YskMw5YxzjN3AP3g', 'postal': 97113, 'geo':[45.5203924,-123.0348346], 'url':'https://www.mrniceguyretail.com/mr-nice-guy-cornelius'  },
		{ 'name': 'Speedy Janes-Hillsboro', 'value': 300136, 'postal': 97123, 'geo':[45.514556,-122.9983446], 'url':'http://www.speedyjanes.com/' },
		{ 'name': 'The Vth-Hillsboro', 'value': 'HXg4iybZrq6wRbZMb', 'postal': 97123, 'geo':[45.5201985,-123.0053237], 'url':'https://thevth.com/' },
		{ 'name': 'Western Oregon-Hillsboro', 'value': 319881, 'postal': 97123, 'geo':[45.5261959,-123.0056568], 'url':'http://westernoregondispensary.com/' },
		{ 'name': 'CDC-Metzger', 'value': 'CDCMetzger', 'postal': 97223, 'geo':[45.4476039,-122.7679728], 'url':'http://cdcpdx.com/' },
		{ 'name': 'Lemonnade-Metzger', 'value': 130410, 'postal': 97219, 'geo':[45.4435975,-122.7452872], 'url':'https://magic-castle-cannabis-store.business.site/' },
		{ 'name': 'Local Leaf-Metzger', 'value': 144011, 'postal': 97223, 'geo':[45.4650255,-122.7570999], 'url':'http://www.localleaf420.com/#!contact_us/c1z0x' },
		{ 'name': 'Cola Cove-Tigard', 'value': '5e7b9f3bdbf9cc0b3d2e3ff2', 'postal': 97223, 'geo':[45.4221154,-122.7869961], 'url':'https://dutchie.com/store/cola-cove/menu' },
		{ 'name': 'Chalice-Tigard', 'value': 'ChaliceTigard', 'postal': 97224, 'geo':[45.3989266,-122.8014775], 'url':'https://www.chalicefarms.com/locations/tigard-cannabis-dispensary'  },
		{ 'name': 'Electric Lettuce-Tigard', 'value': '5f19ecdfa7db3b01086e24fa', 'postal': 97223, 'geo':[45.4380797,-122.7564607], 'url':'https://electriclettuce.com/location/tigard-dispensary?utm_source=google&utm_medium=local&utm_campaign=website_button' },
		{ 'name': 'Kaleafa-Tigard', 'value': 'kaleafaTigard', 'postal': 97223, 'geo':[45.4404432,-122.7514242], 'url':'http://kaleafa.com/' },
		{ 'name': 'Nectar-Barbur', 'value': '4oiKwdDJgmPecXMek', 'postal': 97216, 'geo':[45.4462891,-122.7334938], 'url':'https://nectar.store/barbur/' },
		{ 'name': 'Green Planet-KingCity', 'value': 196138, 'postal': 97224, 'geo':[45.4085658,-122.7974766], 'url':'https://www.thegreenplanet.net/' },
		{ 'name': 'Green Goddess Remedies', 'value': 85676, 'postal': 97215, 'geo':[45.4549689,-122.7353912], 'url':'https://greengoddesspdx.com/' },
		{ 'name': 'Parlour-Beaverton', 'value': 'AYYz8RrZ62Zqme9fv', 'postal': 97225, 'geo':[45.4927978,-122.8394032], 'url':'http://www.parlourcannabis.com/' },
		{ 'name': 'Natural Remedies-Barbur', 'value': 'zBKaBM3hTpspDwMED', 'postal': 97219, 'geo':[45.4615768,-122.7055526], 'url':'https://naturalremediespdx.com/' },
		{ 'name': 'Brothers-Oswego', 'value': 328152, 'postal': 97202, 'geo':[45.5048869,-122.6283683], 'url':'https://brothers-cannabis.com/' },
	];

	constructor(private httpClient: HttpClient, private providersService: ProvidersService) { }


	ngOnInit() {
		this.getConcentrates();
	}

	setPageSizeOptions(setPageSizeOptionsInput: string) {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}

	// pagination event change
	handlePage(e: any) { 
		//& TOTO need to get products rather than originalproducts
		this.currentPage = e.pageIndex;
		this.pageSize = e.pageSize;
		const end = (this.currentPage + 1) * this.pageSize;
		const start = this.currentPage * this.pageSize;
		const part = this.originalProducts.slice(start, end);
		this.products = part;		
	}


	// search by query
	doSearch(e) {
		if (e.keyCode === 13) {
			let query = this.search.toLowerCase();
			let searched = filter(this.originalProducts, (o) => {
				let name = o.Name.toLowerCase();
				if (name.includes(query)) {
					return o;
				}
			});
			this.products = searched;
			this.productCount = this.products.length;
		}
	}
	
	// search zip query
	doZipSearch(e) {
		if (e.keyCode === 13) {
			this.getGeo();
		}
	}
	
	
	// gathers dispensary in range
	getGeo() { 
		let lat = this.postalCodes[this.postal].lat;
		let long = this.postalCodes[this.postal].long;
		this.productFilters.distance = filter(this.dispensaryList, ((item)=> {
			let distance = this.calculateDistance(lat, long, item.geo[0],  item.geo[1]);
			if(this.range >= distance) {
				return item
			}			
		}));
		console.log('h88 productFilters.distance', this.productFilters.distance);
	}

	//calculates range between host and all dispensaries
	calculateDistance(lat1, lon1, lat2, lon2) {
		let unit = '';
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
	
	gatherQuickSorts(products) { // build quick sorts + counts
		this.sortStrainMap = this.quickStrainSorts.map((item) => {
			let searched = filter(products, (o) => {
				let name = o.Name.toLowerCase();
				if (name.includes(item.toLowerCase())) {
					return o;
				}
			});			
			return { 'name': item, 'count': searched.length, 'items': searched, 'type': 'quick-strain-sort', 'active': false }
		});
		
		this.sortTypeMap = this.quickTypesSorts.map((item) => {
			let searched = filter(products, (o) => {
				let name = o.Name.toLowerCase();
				if (name.includes(item.toLowerCase())) {
					return o;
				}
			});			
			return { 'name': item, 'count': searched.length, 'items': searched, 'type': 'quick-type-sort', 'active': false }
		});
	}
	
	gatherSales(products) { // build quick sale sort + counts
		let filteredForSale = filter(products, (o) => {
			if (o.recSpecialPrices.length > 0 && o.recSpecialPrices[0] < o.Prices[0]) {
				let diff = o.Prices[0] - o.recSpecialPrices[0];
				let off = diff / o.Prices[0];
				o.discount = off.toFixed(2);
				o.discount = o.discount * 100;
				o.discountraw = o.discount * 100;
				o.discount = `$${diff.toFixed(2)} (${o.discount.toFixed()}%)`;
				return o
			}
		});
		let sortedBySale = sortBy(filteredForSale, ['recSpecialPrices[0]']);
		this.saleItems = sortedBySale;
		this.bestSaleItems = orderBy(filteredForSale, ['discountraw'], ['desc']);		
	}

	//sort by cost
	sortByCost(e) {
		let filteredbyCost = filter(this.originalProducts, (product) => {
			if (product.Prices[0] >= this.productFilters.pricerange[0] && product.Prices[0] <= this.productFilters.pricerange[1]) {
				return product
			}
		});
		this.products = filteredbyCost;
		this.paginateItems();	
	}
	//sort by cost
	sortByCostLow(e) {
		this.productFilters.pricerange[0] = e;
	}
	//sort by cost
	sortByCostHigh(e) {
		this.productFilters.pricerange[1] = e;
	}

	//sort by dispensary
	sortByDispensary(o) {
		let dispensary;
		let d = [];
		if (o.value.length === 1) { // one selection
			dispensary = filter(this.originalProducts, ['DispensaryID', o.value[0]]);
			this.products = dispensary;
			this.productFilters.locations = o.value[0];
		} else if (o.value.length === 0) { // no selection, show all
			this.products = this.originalProducts;
			this.productFilters.locations = [];
		} else { // multi select
			dispensary = filter(this.originalProducts, (e) => {
				for (let i = 0; i < o.value.length; i++) {
					if (e.DispensaryID === o.value[i]) {
						// this.productFilters.locations.push(e.DispensaryID);
						d.push(e.DispensaryID);
						return o
					}
				}
			});
			// for (let i = 0; i < o.value.length; i++) {
			// 	console.log('h88 o.value', o.value);
			// 	// if (e.DispensaryID === o.value[i]) {
			// 	// 	// this.productFilters.locations.push(e.DispensaryID);
			// 	// 	d.push(e.DispensaryID);
			// 	// 	return o
			// 	// }
			// }			
			this.productFilters.locations = o.value;
			console.log('h88 this.productFilters.locations', this.productFilters.locations);
			this.products = dispensary;
			this.productCount = this.products.length;
		}
	}

	// show all
	sortByAll() {
		this.products = this.originalProducts;
		this.paginateItems();
		this.quickFilterActive(null, null);
		this.gatherQuickSorts(this.products);
	}
	
	// sorts by low/high price
	sortPrice(direction) {
		let sortedByPrice;
		if (direction === 'high') {
			sortedByPrice = orderBy(this.originalProducts, ['Prices[0]'], ['desc']); 
		} else if (direction === 'low') {
			sortedByPrice = orderBy(this.originalProducts, ['Prices[0]'], ['asc']); 
		}
		this.products = sortedByPrice;
		this.paginateItems();
	}

	sort(name, selected) {
		let query = name.toLowerCase();
		let typeSelected = selected.toLowerCase();
		
		if (query === 'sales') {
			this.quickFilterActive(name, null);
			this.products = this.saleItems;
			this.productCount = this.products.length;
		} else if(typeSelected === 'strain') { 
			let item = find(this.sortStrainMap, { 'name' : name});
			this.quickFilterActive(name, 'strain');
			this.products = item.items;
			this.productCount = this.products.length;
		} else if(typeSelected === 'type') {
			let item = find(this.sortTypeMap, { 'name' : name});
			this.quickFilterActive(name, 'type');
			this.products = item.items;
			this.productCount = this.products.length;
		}
	}
	
	// toggles active quick sort class
	quickFilterActive(name, type) { 
		this.sortTypeMap.map((e) => {
			if(e.name === name) {
				e.active = !e.active;
			} else {
				e.active = false;
			}
			return e
		});			
		this.sortStrainMap.map((e) => {
			if(e.name === name) {
				e.active = !e.active;
			} else {
				e.active = false;
			}
			return e
		});			
	}

	removeUnusedProducts(products) { // remove select items from product list
		// let productsToRemove = ['kief', 'syringe', 'dabaratus', 'dripper', 'moonrock', 'cartridge', 'cart', 'rso', 'preroll', 'pre-roll'];
		let filteredProducts = filter(products, (o) => {
			let name = o.Name.toLowerCase();
			if (
				name.includes('kief') === false 
				&& name.includes('syringe') === false 
				&& name.includes('dabaratus') === false 
				&& name.includes('dripper') === false 
				&& name.includes('moonrock') === false 
				&& name.includes('cartridge') === false 
				&& name.includes('cart') === false 
				&& name.includes('rso') === false 
				&& name.includes('feco') === false 
				&& name.includes('drink') === false 
				&& name.includes('soaking salts') === false 
				&& name.includes('spray') === false 
				&& name.includes('floz') === false 
				&& name.includes('moon dust') === false 
				&& name.includes('tincture') === false 
				&& name.includes('no strain') === false 
				&& name.includes('pax') === false 
				&& name.includes('pre-roll') === false 
				&& name.includes('preroll') === false) { 
				return o;
			}
		});
		return filteredProducts
	}

	getConcentrates() {
		this.providersService.getRequest().subscribe((data: Products) => {
			let sortedByPrice = sortBy(data, ['Prices[0]']); // sort by lowest price
			this.products = this.removeUnusedProducts(sortedByPrice); // remove items from the list
			this.originalProducts = this.products; // create copy of items
			this.paginateItems();
			this.loading = false;
			console.log('h88 prod', this.products);
			this.gatherQuickSorts(this.originalProducts);
			this.gatherSales(this.originalProducts);
		});
	}
	
	paginateItems() {
		this.productCount = this.products.length; 
		this.productsChunks = chunk(this.products, this.pageSize);
		this.products = this.productsChunks[0];			
	}

}
