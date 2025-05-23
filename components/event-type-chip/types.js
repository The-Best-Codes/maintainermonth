import { getLiteral } from '../../common/i18n'

import IconPodcast from '../../public/icons/podcast'
import IconStream from '../../public/icons/stream'
import IconTalk from '../../public/icons/talk'
import IconMeetup from '../../public/icons/meetup'
import IconFundraising from '../../public/icons/fundraising'
import IconConference from '../../public/icons/conference'
import IconMisc from '../../public/icons/misc'

const TYPES = {
  podcast: {
    label: getLiteral('event-type:podcast'),
    icon: <IconPodcast />,
    color: '#E6007A',
  },
  stream: {
    label: getLiteral('event-type:stream'),
    icon: <IconStream />,
    color: '#7A3FF8',
  },
  talk: {
    label: getLiteral('event-type:talk'),
    icon: <IconTalk />,
    color: '#138162',
  },
  meetup: {
    label: getLiteral('event-type:meetup'),
    icon: <IconMeetup />,
    color: '#C70A11',
  },
  fundraising: {
    label: getLiteral('event-type:fundraising'),
    icon: <IconFundraising />,
    color: '#F09E00',
  },
  conference: {
    label: getLiteral('event-type:conference'),
    icon: <IconConference />,
    color: '#1352F1',
  },
  misc: {
    label: getLiteral('event-type:misc'),
    icon: <IconMisc />,
    color: '#0107B6',
  },
  workshop: {
    label: getLiteral('event-type:workshop'),
    icon: <IconMisc />,
    color: '#0107B6',
  },
}

export default TYPES
