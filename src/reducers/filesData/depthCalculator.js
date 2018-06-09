import { map, set, isNull, chain } from 'lodash';

export class TreeDepthCalculator {

  getFilesTreeDepth(files, allFiles) {
    return map(files, (file) => {
      const depth = this.getFileTreeDepth(file.parentId, allFiles);
      set(file, 'depth', depth);
      return file;
    })
  }

  getFileTreeDepth(parentId, allFiles) {
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
