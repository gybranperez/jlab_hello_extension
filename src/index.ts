import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { ITranslator } from '@jupyterlab/translation';
/**
 * Initialization data for the jlab_hello_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlab_hello_extension:plugin',
  description: 'A demo for JupyterLab 4 extension implementing translation to other languages.',
  autoStart: true,
  requires: [ITranslator, ISettingRegistry],
  activate: (app: JupyterFrontEnd, translator: ITranslator, settingRegistry: ISettingRegistry) => {
    console.log('JupyterLab extension jlab_hello_extension is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('jlab_hello_extension settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for jlab_hello_extension.', reason);
        });
    }

    const trans = translator.load('mock_extension');
    const { commands } = app;


    commands.addCommand("hello-command", {
      label: trans.__('MY LABEL'),
      caption: trans.__('MY LABEL'),
      execute: (args: any) => {
        alert(trans.__("hello"));
      }
    });



  }
};

export default plugin;
