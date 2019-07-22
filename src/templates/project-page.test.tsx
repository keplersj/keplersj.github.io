import * as React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Page from "./project-page";

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementation(() => ({
    file: {
      childImageSharp: {
        fixed: {
          base64: "",
          width: 100,
          height: 100,
          src: "",
          srcSet: ""
        }
      }
    },
    backdrop: {
      childImageSharp: {
        fluid: {
          base64: "",
          aspectRatio: 1.333,
          src: "",
          srcSet: "",
          srcWebp: "",
          srcSetWebp: "",
          sizes: ""
        }
      }
    },
    site: {
      siteMetadata: {
        title: "",
        description: "",
        siteUrl: "",
        twitterUsername: "",
        instagramUsername: "",
        linkedinUsername: "",
        githubUsername: ""
      }
    }
  }));
});

describe("Project Page Template", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Page
          data={{
            markdownRemark: {
              excerpt: "",
              html: "",
              fields: {
                slug: ""
              },
              frontmatter: {
                title: "",
                date: "",
                description: ""
              },
              timeToRead: "",
              wordCount: {
                words: ""
              }
            }
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});