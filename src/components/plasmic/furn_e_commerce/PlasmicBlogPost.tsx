// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: t71GRmRECWBzXEr1QZhGCg
// Component: m1pvFzYc5uNA
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: t71GRmRECWBzXEr1QZhGCg/projectcss
import * as sty from "./PlasmicBlogPost.module.css"; // plasmic-import: m1pvFzYc5uNA/css

import b1VOcS18CuQrM from "./images/b1.jpeg"; // plasmic-import: vOcS_18CUQrM/picture

export type PlasmicBlogPost__VariantMembers = {
  long: "long";
};

export type PlasmicBlogPost__VariantsArgs = {
  long?: SingleBooleanChoiceArg<"long">;
};

type VariantPropType = keyof PlasmicBlogPost__VariantsArgs;
export const PlasmicBlogPost__VariantProps = new Array<VariantPropType>("long");

export type PlasmicBlogPost__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  author?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBlogPost__ArgsType;
export const PlasmicBlogPost__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "image",
  "author"
);

export type PlasmicBlogPost__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultBlogPostProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  author?: React.ReactNode;
  long?: SingleBooleanChoiceArg<"long">;
  className?: string;
}

function PlasmicBlogPost__RenderFunc(props: {
  variants: PlasmicBlogPost__VariantsArgs;
  args: PlasmicBlogPost__ArgsType;
  overrides: PlasmicBlogPost__OverridesType;
  dataFetches?: PlasmicBlogPost__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__long]: hasVariant(variants, "long", "long")
      })}
    >
      {(hasVariant(variants, "long", "long") ? false : true) ? (
        <div
          className={classNames(defaultcss.all, sty.freeBox__zhC7O, {
            [sty.freeBox__long__zhC7O4Pt2Y]: hasVariant(
              variants,
              "long",
              "long"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__kU1E)}
                src={b1VOcS18CuQrM}
              />
            ),

            value: args.image
          })}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__mjv8Q, {
          [sty.freeBox__long__mjv8Q4Pt2Y]: hasVariant(variants, "long", "long")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Why Brands are Looking at Local Language",
          value: args.title,
          className: classNames(sty.slotTitle, {
            [sty.slotTitle__long]: hasVariant(variants, "long", "long")
          })
        })}

        {p.renderPlasmicSlot({
          defaultContents: "By Robert Norby / 18th March 2018",
          value: args.author,
          className: classNames(sty.slotAuthor)
        })}

        {p.renderPlasmicSlot({
          defaultContents:
            "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....",
          value: args.description,
          className: classNames(sty.slotDescription, {
            [sty.slotDescription__long]: hasVariant(variants, "long", "long")
          })
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogPost__VariantsArgs;
    args?: PlasmicBlogPost__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicBlogPost__Fetches;
  } & Omit<PlasmicBlogPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBlogPost__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBlogPost__ArgProps,
      internalVariantPropNames: PlasmicBlogPost__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicBlogPost__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogPost";
  } else {
    func.displayName = `PlasmicBlogPost.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogPost = Object.assign(
  // Top-level PlasmicBlogPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBlogPost
    internalVariantProps: PlasmicBlogPost__VariantProps,
    internalArgProps: PlasmicBlogPost__ArgProps
  }
);

export default PlasmicBlogPost;
/* prettier-ignore-end */
