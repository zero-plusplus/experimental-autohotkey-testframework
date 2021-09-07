import * as gulp from 'gulp';
import * as del from 'del';
import * as mkdirp from 'mkdirp';
import { AhkInliner } from './external/AhkInliner';

const buildDir = './build';
export const clean = async(): Promise<void> => {
  await del(buildDir);
};
export const build_v2 = (): void => {
  const ahkVersion_2 = 2;
  const inliner_v2 = new AhkInliner(ahkVersion_2);
  mkdirp.sync(buildDir);
  inliner_v2.write('./src/UnitTest/UnitTest.ahk2', './build/UnitTest.ahk2');
};
export const build = gulp.series(clean, build_v2);
