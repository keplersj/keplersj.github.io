import * as React from "react";
import {
  FaGithub,
  FaTwitter,
  FaKeybase,
  FaEnvelope,
  FaKey,
  FaLinkedin,
  FaInstagram,
  FaExternalLinkSquareAlt
} from "react-icons/fa";
import { IconType } from "react-icons";
import styled from "@emotion/styled";

const LinkSize = "1.5em";

const Link = styled.a`
  padding: 0.5em;
`;

const Icons: { [index: string]: IconType } = {
  Email: FaEnvelope,
  PGP: FaKey,
  GitHub: FaGithub,
  Twitter: FaTwitter,
  LinkedIn: FaLinkedin,
  Keybase: FaKeybase,
  Instagram: FaInstagram,
  default: FaExternalLinkSquareAlt
};

interface Props {
  url: string;
  name: string;
  id: string;
}

export const SocialLink = (props: Props): React.ReactElement => {
  const Icon = Icons[props.name];

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={props.url}
      key={props.name}
    >
      <Icon size={LinkSize} title={`${props.name}: ${props.id}`} />
    </Link>
  );
};