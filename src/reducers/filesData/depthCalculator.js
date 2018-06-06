import { map, set, isNull, chain } from 'lodash';

export class TreeDepthCalculator {

  getFilesTreeDepth(files, allFiles) {
    return map(files, (group) => {
      const depth = this._getFileTreeDepth(group.parentId, allFiles);
      set(group, 'depth', depth);
      return group;
    })
  }

  _getFileTreeDepth(parentId, allFiles) {
    let nextParentId = parentId;
    let depth = 1;

    while(!isNull(nextParentId)) {
      depth++;
      nextParentId = chain(allFiles)
        .find({ id: nextParentId })
        .get('parentId')
        .value();
    }
    return depth;
  }
}
