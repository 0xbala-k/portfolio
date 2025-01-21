import { ReactNode } from "react";

import {
  GitHubLogo,
  Twitterlogo,
} from "@/components/Shared/Icons";
import LinkedInLogo from "@/components/Shared/Icons/LinkedIn";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/0xbala_k",
    icon: <Twitterlogo color="#1DA1F2" />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/0xbala-k",
    icon: <GitHubLogo />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/0xmuralik/",
    icon: <LinkedInLogo color="#f0f0f0" />,
  },
];

export default socials;
