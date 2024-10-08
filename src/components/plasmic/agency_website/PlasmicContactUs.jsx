// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 73xdGP9Q5fZ1cPjXq85afw
// Component: HaCS43-hWTBT
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Header from "../../Header"; // plasmic-import: jbktukOjJD-L/component
import TextInput from "../../TextInput"; // plasmic-import: qjDN-KLLlNCy/component
import Button from "../../Button"; // plasmic-import: jSV76ft40CrX/component
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: qO1rwRcK1KDF/component
import FooterMain from "../../FooterMain"; // plasmic-import: 9-zI42kgeb0s/component
import { useScreenVariants as useScreenVariantshFppFalB91Q } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: H-fppFalB91Q/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 73xdGP9Q5fZ1cPjXq85afw/projectcss
import sty from "./PlasmicContactUs.module.css"; // plasmic-import: HaCS43-hWTBT/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: _DC0W4hm8_0V/icon

createPlasmicElementProxy;

export const PlasmicContactUs__VariantProps = new Array();

export const PlasmicContactUs__ArgProps = new Array();

const $$ = {};

function PlasmicContactUs__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "name.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "name2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "name3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "name3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "name4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshFppFalB91Q()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"banner"}
            data-plasmic-override={overrides.banner}
            className={classNames(projectcss.all, sty.banner)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___3X4I)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Contact us"
                    : "Contact us"}
                </h1>
              </Stack__>
            </Stack__>
          </div>
          <Stack__
            as={"div"}
            data-plasmic-name={"clientsSection5"}
            data-plasmic-override={overrides.clientsSection5}
            hasGap={true}
            className={classNames(projectcss.all, sty.clientsSection5)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__hzKhg)}
            >
              <div className={classNames(projectcss.all, sty.columns__fBgmn)}>
                <div className={classNames(projectcss.all, sty.column__rQb9P)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___92Id2
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Proactively architect worldwide sources, then globally implement enabled  users, then collaboratively innovate unique expertise, then continually  strategize excellent markets."
                      : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__uYaCl)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__wyA3L)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__whLvm)}
                    >
                      <div
                        data-plasmic-name={"formWrapper"}
                        data-plasmic-override={overrides.formWrapper}
                        className={classNames(projectcss.all, sty.formWrapper)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__tvHu1
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column___9ADa
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__xRg9
                              )}
                            >
                              {"First name"}
                            </div>
                            <TextInput
                              data-plasmic-name={"name"}
                              data-plasmic-override={overrides.name}
                              className={classNames("__wab_instance", sty.name)}
                              endIcon={
                                <ChecksvgIcon
                                  data-plasmic-name={"svg"}
                                  data-plasmic-override={overrides.svg}
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg
                                  )}
                                  role={"img"}
                                />
                              }
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__kqvI
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__zGHos
                              )}
                            >
                              {"Last name"}
                            </div>
                            <TextInput
                              data-plasmic-name={"name2"}
                              data-plasmic-override={overrides.name2}
                              className={classNames(
                                "__wab_instance",
                                sty.name2
                              )}
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name2",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name2",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__yIcOz
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__jgRQl
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__depWd
                              )}
                            >
                              {"Email address"}
                            </div>
                            <TextInput
                              data-plasmic-name={"name3"}
                              data-plasmic-override={overrides.name3}
                              className={classNames(
                                "__wab_instance",
                                sty.name3
                              )}
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name3",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name3",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__mhsrC
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__niVqG
                              )}
                            >
                              {"Phone number"}
                            </div>
                            <TextInput
                              className={classNames(
                                "__wab_instance",
                                sty.textInput__iX6W
                              )}
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name3",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name3",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__tx1Nm
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__rEDtI
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__vy9QQ
                              )}
                            >
                              {"Company"}
                            </div>
                            <TextInput
                              data-plasmic-name={"name4"}
                              data-plasmic-override={overrides.name4}
                              className={classNames(
                                "__wab_instance",
                                sty.name4
                              )}
                              onChange={(...eventArgs) => {
                                generateStateOnChangeProp($state, [
                                  "name4",
                                  "value"
                                ])(
                                  (e => e.target?.value).apply(null, eventArgs)
                                );
                              }}
                              placeholder={""}
                              value={
                                generateStateValueProp($state, [
                                  "name4",
                                  "value"
                                ]) ?? ""
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.columns__xyJCo
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__vpY3O
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__eyVW
                              )}
                            >
                              {"Message"}
                            </div>
                            <textarea
                              data-plasmic-name={"textarea"}
                              data-plasmic-override={overrides.textarea}
                              className={classNames(
                                projectcss.all,
                                projectcss.textarea,
                                sty.textarea
                              )}
                              value={""}
                            />

                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__jPdx3
                              )}
                            >
                              <Button
                                data-plasmic-name={"button"}
                                data-plasmic-override={overrides.button}
                                className={classNames(
                                  "__wab_instance",
                                  sty.button
                                )}
                                submitsForm={true}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__w9W7Y
                                  )}
                                >
                                  {"Submit"}
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__jHyv6)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__u8Kss
                        )}
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
                          {"Address"}
                        </h2>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__uG3Id
                          )}
                        >
                          {
                            "1234 Lorem Ipsum .\nLorem Ipsum , GA 30308\n1234567890"
                          }
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__uzSr8
                          )}
                        >
                          {"xyz@companyname.com"}
                        </div>
                        <h4
                          data-plasmic-name={"h4"}
                          data-plasmic-override={overrides.h4}
                          className={classNames(
                            projectcss.all,
                            projectcss.h4,
                            projectcss.__wab_text,
                            sty.h4
                          )}
                        >
                          {"Address 2"}
                        </h4>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__w6Por
                          )}
                        >
                          {
                            "1234 Lorem Ipsum .\nLorem Ipsum , GA 30308\n1234567890"
                          }
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xwD7R
                          )}
                        >
                          {"xyz@companyname.com"}
                        </div>
                      </Stack__>
                    </div>
                  </Stack__>
                </div>
              </div>
            </Stack__>
          </Stack__>
          <div
            data-plasmic-name={"footerTopSection"}
            data-plasmic-override={overrides.footerTopSection}
            className={classNames(projectcss.all, sty.footerTopSection)}
          >
            <HomeFooterTop
              data-plasmic-name={"homeFooterTop"}
              data-plasmic-override={overrides.homeFooterTop}
              className={classNames("__wab_instance", sty.homeFooterTop)}
            />
          </div>
          <FooterMain
            data-plasmic-name={"footerMain"}
            data-plasmic-override={overrides.footerMain}
            className={classNames("__wab_instance", sty.footerMain)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "banner",
    "foreground2",
    "h1",
    "clientsSection5",
    "formWrapper",
    "name",
    "svg",
    "name2",
    "name3",
    "name4",
    "textarea",
    "button",
    "h2",
    "h4",
    "footerTopSection",
    "homeFooterTop",
    "footerMain"
  ],

  header: ["header"],
  banner: ["banner", "foreground2", "h1"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"],
  clientsSection5: [
    "clientsSection5",
    "formWrapper",
    "name",
    "svg",
    "name2",
    "name3",
    "name4",
    "textarea",
    "button",
    "h2",
    "h4"
  ],

  formWrapper: [
    "formWrapper",
    "name",
    "svg",
    "name2",
    "name3",
    "name4",
    "textarea",
    "button"
  ],

  name: ["name", "svg"],
  svg: ["svg"],
  name2: ["name2"],
  name3: ["name3"],
  name4: ["name4"],
  textarea: ["textarea"],
  button: ["button"],
  h2: ["h2"],
  h4: ["h4"],
  footerTopSection: ["footerTopSection", "homeFooterTop"],
  homeFooterTop: ["homeFooterTop"],
  footerMain: ["footerMain"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContactUs__ArgProps,
          internalVariantPropNames: PlasmicContactUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactUs";
  } else {
    func.displayName = `PlasmicContactUs.${nodeName}`;
  }
  return func;
}

export const PlasmicContactUs = Object.assign(
  // Top-level PlasmicContactUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    banner: makeNodeComponent("banner"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    clientsSection5: makeNodeComponent("clientsSection5"),
    formWrapper: makeNodeComponent("formWrapper"),
    _name: makeNodeComponent("name"),
    svg: makeNodeComponent("svg"),
    name2: makeNodeComponent("name2"),
    name3: makeNodeComponent("name3"),
    name4: makeNodeComponent("name4"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),
    h2: makeNodeComponent("h2"),
    h4: makeNodeComponent("h4"),
    footerTopSection: makeNodeComponent("footerTopSection"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),
    // Metadata about props expected for PlasmicContactUs
    internalVariantProps: PlasmicContactUs__VariantProps,
    internalArgProps: PlasmicContactUs__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Contact",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContactUs;
/* prettier-ignore-end */
