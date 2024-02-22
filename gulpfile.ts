import { dest, parallel, series, src } from 'gulp';
import mustache from 'gulp-mustache';
import rename from 'gulp-rename';
import * as config from './gulp-config.json';

const processThemeTemplates = async (targetFolder: string) =>
    src(config.themeFileLocation + ".mustache")
        .pipe(rename(path => ({
            extname: "",
            basename: path.basename,
            dirname: path.dirname
        })))
        .pipe(mustache(config.mustache.view, config.mustache.options))
        .pipe(dest(targetFolder));


export const updateBigCommerceTheme =
    parallel(
        processThemeTemplates.bind(this, config.themeArtifactFolder),
    );