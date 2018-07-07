import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlayCircle,
  faStopCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function initializeFontAwesome() {
  library.add(faPlayCircle, faStopCircle);
}
