package com.payapp

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    // 🔵 Mostrar splash antes de llamar al super
    SplashScreen.show(this, true)
    super.onCreate(savedInstanceState)
  }

  override fun getMainComponentName(): String = "PayApp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
