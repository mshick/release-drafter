import {Context} from '@actions/github/lib/context';
import {Utils, ContextHelper} from '@technote-space/github-action-helper';
import {getInput} from '@actions/core';

export const TARGET_EVENTS = {
  'create': [
    (context: Context): boolean => Utils.isSemanticVersioningTagName(ContextHelper.getTagName(context)),
  ],
  'release': [
    [
      'published',
      (context: Context): boolean => Utils.isSemanticVersioningTagName(ContextHelper.getTagName(context)),
    ],
  ],
  'push': [
    (context: Context): boolean => Utils.isSemanticVersioningTagName(ContextHelper.getTagName(context)),
  ],
  'push-branch': [
    (context: Context): boolean => ContextHelper.isPush(context) && Utils.isSemanticVersioningTagName(getInput('tag')),
  ]
};
