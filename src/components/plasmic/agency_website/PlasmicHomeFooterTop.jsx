// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 73xdGP9Q5fZ1cPjXq85afw
// Component: qO1rwRcK1KDF
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantshFppFalB91Q } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: H-fppFalB91Q/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 73xdGP9Q5fZ1cPjXq85afw/projectcss
import sty from "./PlasmicHomeFooterTop.module.css"; // plasmic-import: qO1rwRcK1KDF/css
import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: wj4QmYzaI0CF/icon

createPlasmicElementProxy;

export const PlasmicHomeFooterTop__VariantProps = new Array();

export const PlasmicHomeFooterTop__ArgProps = new Array();

const $$ = {};

function PlasmicHomeFooterTop__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshFppFalB91Q()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__jte4D)}>
        <Stack__
          as={"div"}
          data-plasmic-name={"foreground3"}
          data-plasmic-override={overrides.foreground3}
          hasGap={true}
          className={classNames(projectcss.all, sty.foreground3)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__rnVxj)}
          >
            <h2
              data-plasmic-name={"h2"}
              data-plasmic-override={overrides.h2}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Take your business to the next level"
                : "Work with us."}
            </h2>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9F2G
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Rapidiously revolutionize future-proof niches, and authoritatively \nrestore user-centric e-markets."
                : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yAtBg)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__qTcad)}
            >
              <Stack__
                as={"button"}
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                hasGap={true}
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  sty.button
                )}
              >
                {false ? (
                  <Icon29Icon
                    className={classNames(projectcss.all, sty.svg__gJVgC)}
                    role={"img"}
                  />
                ) : null}
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hQ0Nj
                  )}
                >
                  {"Get IN Touch"}
                </div>
                {false ? (
                  <Icon29Icon
                    className={classNames(projectcss.all, sty.svg__vHFpS)}
                    role={"img"}
                  />
                ) : null}
              </Stack__>
            </Stack__>
          </Stack__>
        </Stack__>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "foreground3", "h2", "button"],
  foreground3: ["foreground3", "h2", "button"],
  h2: ["h2"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomeFooterTop__ArgProps,
          internalVariantPropNames: PlasmicHomeFooterTop__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomeFooterTop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeFooterTop";
  } else {
    func.displayName = `PlasmicHomeFooterTop.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeFooterTop = Object.assign(
  // Top-level PlasmicHomeFooterTop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicHomeFooterTop
    internalVariantProps: PlasmicHomeFooterTop__VariantProps,
    internalArgProps: PlasmicHomeFooterTop__ArgProps
  }
);

export default PlasmicHomeFooterTop;
/* prettier-ignore-end */
