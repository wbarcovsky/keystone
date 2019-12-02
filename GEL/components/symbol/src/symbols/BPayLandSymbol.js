import React from 'react';
import { propTypes, defaultProps, Symbol } from '../Symbol';

export const BPayLandSymbol = props => (
	<Symbol {...props}>
		<g fill="none" fillRule="evenodd">
			<rect width="111" height="49" x="2.734" y="2.734" fill="#0A2652" />
			<path
				fill="#FFFFFE"
				d="M112.929154,49.825589 C112.929154,50.3740787 112.651654,50.9060032 111.843464,50.9221081 L4.09415542,50.9221081 C4.06525874,50.9221081 4.04232486,50.9165864 4.01893231,50.9165864 C3.49191185,50.886217 3.06901119,50.4513826 3.06901119,49.9120958 C3.06901119,49.9120958 3.07268061,30.16877 3.07268061,16.6000937 L14.3676142,16.6000937 L9.81294657,18.2607473 L9.81294657,43.2796046 C9.81294657,43.9767202 10.2037398,44.3434536 10.7913057,44.3991308 L26.1285641,44.3991308 C31.3671199,44.228418 35.5617257,39.9256274 35.5617257,34.6303097 C35.5617257,31.1594564 33.7572884,28.1165353 31.0373308,26.3799582 C32.739483,24.8702313 34.022404,22.4112309 34.022404,19.9756977 C34.022404,13.5051766 29.4429678,9.83462145 22.9068133,9.83462145 L16.5463324,9.83462145 L16.5463324,3.07789187 C44.9737882,3.07789187 111.843464,3.07789187 111.843464,3.07789187 C112.681927,3.07789187 112.929154,3.62638149 112.929154,4.16934941 L112.929154,49.825589 Z M3.07268061,4.0920455 L3.07268061,4.09020493 C3.07268061,3.55643986 3.48319698,3.11930467 4.0028786,3.07789187 C4.0028786,3.07789187 6.14215049,3.07789187 9.81294657,3.07789187 L9.81294657,9.83462145 L3.07268061,9.83462145 C3.07268061,6.3403008 3.07268061,4.0920455 3.07268061,4.0920455 Z M16.445882,16.4151165 L23.7668337,16.4151165 C25.6822709,16.4151165 27.2394811,18.0578245 27.2394811,19.9812194 C27.2394811,21.9078352 25.6822709,23.4718589 23.7668337,23.4718589 L22.5004251,23.5362788 C21.8229584,23.5671083 21.4628965,23.9678923 21.4468428,24.5895445 L21.4486775,28.8748498 C21.4881238,29.5526394 21.9073551,29.9083294 22.5522556,29.9083294 L25.7019941,29.9083294 C27.7839313,29.9083294 29.4718645,31.6016531 29.4718645,33.6920796 C29.4718645,35.6656299 27.9559353,37.2798091 26.0281138,37.4413191 L17.5210221,37.4486814 C16.8866711,37.4357974 16.4747787,37.0709045 16.445882,36.3701078 L16.445882,16.4151165 Z M113.850179,1.77635684e-15 L2.14477602,1.77635684e-15 C0.962305408,1.77635684e-15 0,0.965378552 0,2.15714712 L0,51.8451536 C0,53.0350816 0.962305408,54 2.14477602,54 L113.850179,54 C115.032649,54 116,53.0350816 116,51.8451536 L116,2.15714712 C116,0.965378552 115.032649,1.77635684e-15 113.850179,1.77635684e-15 Z M52.2832729,26.4554216 L45.6407053,26.4554216 L45.6407053,17.4251289 L52.2832729,17.4196072 C54.7697637,17.4196072 56.7884034,19.4414725 56.7884034,21.9386647 C56.7884034,24.4340164 54.7697637,26.4554216 52.2832729,26.4554216 Z M52.3617068,12.7422607 L42.0075207,12.7422607 C41.1075955,12.7422607 40.9782484,13.4872311 40.9782484,13.9501342 C40.9782484,14.4180989 40.9819178,40.2472668 40.9819178,40.2472668 C40.9819178,41.3290614 41.975872,41.2844276 42.0854959,41.2844276 L44.7302304,41.2844276 C45.1650567,41.2844276 45.6462094,40.9319586 45.6462094,40.432244 L45.6407053,31.0048485 L52.3617068,31.0048485 C57.3878949,31.0048485 61.4646205,26.9183247 61.4646205,21.8724042 C61.4646205,16.8292446 57.3878949,12.7422607 52.3617068,12.7422607 Z M68.4764236,30.6937923 L73.1475953,17.4196072 L78.1008537,30.6937923 L68.4764236,30.6937923 Z M76.7128956,13.9409314 C76.3601726,13.2185079 76.1042305,12.7477824 74.8268137,12.7477824 L71.468377,12.7477824 C70.1923361,12.7477824 69.9386875,13.2185079 69.5836711,13.9409314 C69.2607621,14.6532316 59.8670468,40.1823868 59.8670468,40.1823868 C59.8670468,40.1823868 59.3152577,41.2844276 60.7279845,41.2844276 C62.1723599,41.2844276 62.4847193,41.3023731 63.0984298,41.3023731 C63.7447064,41.3023731 64.4918921,41.1799753 64.8414043,40.1644412 C65.150553,39.2763666 66.5559409,35.3600954 66.5559409,35.3600954 L79.7406258,35.3600954 C79.7406258,35.3600954 81.1478484,39.2763666 81.4533276,40.1644412 C81.8055919,41.1799753 82.5523189,41.3023731 83.1967608,41.3023731 C83.8104713,41.3023731 84.1246654,41.2844276 85.5672061,41.2844276 C86.9836023,41.2844276 86.4299785,40.1823868 86.4299785,40.1823868 C86.4299785,40.1823868 77.0358045,14.6532316 76.7128956,13.9409314 L76.7128956,13.9409314 Z M105.3385,12.7169528 C103.893666,12.7169528 103.246013,12.698087 102.634137,12.698087 C101.98832,12.698087 101.239299,12.8186443 100.88887,13.8364791 L99.6004444,16.1574368 L94.432525,25.3285331 L89.2659816,16.1574368 L87.9780151,13.8364791 C87.6266681,12.8186443 86.8794825,12.698087 86.2327472,12.698087 C85.6208714,12.698087 84.9713841,12.7169528 83.5279259,12.7169528 C82.1119885,12.7169528 82.6656122,13.8176132 82.6656122,13.8176132 C82.6656122,13.8176132 87.9105895,23.1437774 92.1308813,30.6813685 C92.1308813,30.6813685 92.0574929,39.6412594 92.0574929,40.2652124 C92.0574929,40.8887052 92.390034,41.2844276 93.06429,41.2844276 L95.5255535,41.2844276 C95.9681773,41.2844276 96.7552679,41.2466959 96.7552679,40.2937412 L96.7364621,30.6813685 C100.958589,23.1437774 106.201272,13.8176132 106.201272,13.8176132 C106.201272,13.8176132 106.753061,12.7169528 105.3385,12.7169528 Z"
			/>
		</g>
	</Symbol>
);

BPayLandSymbol.defaultProps = {
	...defaultProps,
	viewBoxWidth: 116,
	viewBoxHeight: 54,
	label: 'BPay',
};
BPayLandSymbol.propTypes = propTypes;