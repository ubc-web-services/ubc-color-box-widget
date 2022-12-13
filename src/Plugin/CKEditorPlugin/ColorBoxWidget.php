<?php

namespace Drupal\ubc_color_box_widget\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "color-box-widget" plugin.
 *
 * @CKEditorPlugin(
 *   id = "color-box-widget",
 *   label = @Translation("Color Box Widget"),
 *   module = "ubc_color_box_widget"
 * )
 */
class ColorBoxWidget extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return \Drupal::service('extension.list.module')->getPath('ubc_color_box_widget') . '/plugins/color-box-widget/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [
      'color-box-widget' => [
        'label' => $this->t('Color Box Widget'),
        'image' => \Drupal::service('extension.list.module')->getPath('ubc_color_box_widget') . '/plugins/color-box-widget/icons/color-box-widget.png',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

}
