import { NgModule } from '@angular/core';
import { ThAmbientLight } from './ThAmbientLight';
import { ThAmbientLightProbe } from './ThAmbientLightProbe';
import { ThArrayCamera } from './ThArrayCamera';
import { ThArrowHelper } from './ThArrowHelper';
import { ThAudio } from './ThAudio';
import { ThAudioListener } from './ThAudioListener';
import { ThAxesHelper } from './ThAxesHelper';
import { ThBone } from './ThBone';
import { ThBox3Helper } from './ThBox3Helper';
import { ThBoxGeometry } from './ThBoxGeometry';
import { ThBoxHelper } from './ThBoxHelper';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThCamera } from './ThCamera';
import { ThCameraHelper } from './ThCameraHelper';
import { ThCircleGeometry } from './ThCircleGeometry';
import { ThConeGeometry } from './ThConeGeometry';
import { ThCubeCamera } from './ThCubeCamera';
import { ThCylinderGeometry } from './ThCylinderGeometry';
import { ThDeviceOrientationControls } from './ThDeviceOrientationControls';
import { ThDirectionalLight } from './ThDirectionalLight';
import { ThDirectionalLightHelper } from './ThDirectionalLightHelper';
import { ThDodecahedronGeometry } from './ThDodecahedronGeometry';
import { ThDragControls } from './ThDragControls';
import { ThEdgesGeometry } from './ThEdgesGeometry';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';
import { ThFirstPersonControls } from './ThFirstPersonControls';
import { ThFlyControls } from './ThFlyControls';
import { ThGridHelper } from './ThGridHelper';
import { ThGroup } from './ThGroup';
import { ThHemisphereLight } from './ThHemisphereLight';
import { ThHemisphereLightHelper } from './ThHemisphereLightHelper';
import { ThHemisphereLightProbe } from './ThHemisphereLightProbe';
import { ThIcosahedronGeometry } from './ThIcosahedronGeometry';
import { ThImmediateRenderObject } from './ThImmediateRenderObject';
import { ThInstancedBufferGeometry } from './ThInstancedBufferGeometry';
import { ThInstancedMesh } from './ThInstancedMesh';
import { ThLatheGeometry } from './ThLatheGeometry';
import { ThLight } from './ThLight';
import { ThLightProbe } from './ThLightProbe';
import { ThLine } from './ThLine';
import { ThLineBasicMaterial } from './ThLineBasicMaterial';
import { ThLineDashedMaterial } from './ThLineDashedMaterial';
import { ThLineLoop } from './ThLineLoop';
import { ThLineSegments } from './ThLineSegments';
import { ThLOD } from './ThLOD';
import { ThMapControls } from './ThMapControls';
import { ThMaterial } from './ThMaterial';
import { ThMesh } from './ThMesh';
import { ThMeshBasicMaterial } from './ThMeshBasicMaterial';
import { ThMeshDepthMaterial } from './ThMeshDepthMaterial';
import { ThMeshDistanceMaterial } from './ThMeshDistanceMaterial';
import { ThMeshLambertMaterial } from './ThMeshLambertMaterial';
import { ThMeshMatcapMaterial } from './ThMeshMatcapMaterial';
import { ThMeshNormalMaterial } from './ThMeshNormalMaterial';
import { ThMeshPhongMaterial } from './ThMeshPhongMaterial';
import { ThMeshPhysicalMaterial } from './ThMeshPhysicalMaterial';
import { ThMeshStandardMaterial } from './ThMeshStandardMaterial';
import { ThMeshToonMaterial } from './ThMeshToonMaterial';
import { ThObject3D } from './ThObject3D';
import { ThOctahedronGeometry } from './ThOctahedronGeometry';
import { ThOrbitControls } from './ThOrbitControls';
import { ThOrthographicCamera } from './ThOrthographicCamera';
import { ThParametricGeometry } from './ThParametricGeometry';
import { ThPerspectiveCamera } from './ThPerspectiveCamera';
import { ThPlaneGeometry } from './ThPlaneGeometry';
import { ThPlaneHelper } from './ThPlaneHelper';
import { ThPointerLockControls } from './ThPointerLockControls';
import { ThPointLight } from './ThPointLight';
import { ThPointLightHelper } from './ThPointLightHelper';
import { ThPoints } from './ThPoints';
import { ThPointsMaterial } from './ThPointsMaterial';
import { ThPolarGridHelper } from './ThPolarGridHelper';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';
import { ThPositionalAudio } from './ThPositionalAudio';
import { ThRawShaderMaterial } from './ThRawShaderMaterial';
import { ThRectAreaLight } from './ThRectAreaLight';
import { ThRingGeometry } from './ThRingGeometry';
import { ThScene } from './ThScene';
import { ThShaderMaterial } from './ThShaderMaterial';
import { ThShadowMaterial } from './ThShadowMaterial';
import { ThShapeGeometry } from './ThShapeGeometry';
import { ThSkeletonHelper } from './ThSkeletonHelper';
import { ThSkinnedMesh } from './ThSkinnedMesh';
import { ThSphereGeometry } from './ThSphereGeometry';
import { ThSpotLight } from './ThSpotLight';
import { ThSpotLightHelper } from './ThSpotLightHelper';
import { ThSprite } from './ThSprite';
import { ThSpriteMaterial } from './ThSpriteMaterial';
import { ThStereoCamera } from './ThStereoCamera';
import { ThTetrahedronGeometry } from './ThTetrahedronGeometry';
import { ThTextGeometry } from './ThTextGeometry';
import { ThTorusGeometry } from './ThTorusGeometry';
import { ThTorusKnotGeometry } from './ThTorusKnotGeometry';
import { ThTrackballControls } from './ThTrackballControls';
import { ThTransformControls } from './ThTransformControls';
import { ThTubeGeometry } from './ThTubeGeometry';
import { ThWireframeGeometry } from './ThWireframeGeometry';

@NgModule({
  declarations: [
    ThAudioListener,
    ThPositionalAudio,
    ThAudio,
    ThStereoCamera,
    ThPerspectiveCamera,
    ThOrthographicCamera,
    ThCubeCamera,
    ThArrayCamera,
    ThCamera,
    ThObject3D,
    ThImmediateRenderObject,
    ThSpotLightHelper,
    ThSkeletonHelper,
    ThPointLightHelper,
    ThHemisphereLightHelper,
    ThGridHelper,
    ThPolarGridHelper,
    ThDirectionalLightHelper,
    ThCameraHelper,
    ThBoxHelper,
    ThBox3Helper,
    ThPlaneHelper,
    ThArrowHelper,
    ThAxesHelper,
    ThSpotLight,
    ThPointLight,
    ThRectAreaLight,
    ThHemisphereLight,
    ThDirectionalLight,
    ThAmbientLight,
    ThLight,
    ThAmbientLightProbe,
    ThHemisphereLightProbe,
    ThLightProbe,
    ThSprite,
    ThLOD,
    ThInstancedMesh,
    ThSkinnedMesh,
    ThBone,
    ThMesh,
    ThLineSegments,
    ThLineLoop,
    ThLine,
    ThPoints,
    ThGroup,
    ThScene,
    ThShadowMaterial,
    ThSpriteMaterial,
    ThRawShaderMaterial,
    ThShaderMaterial,
    ThPointsMaterial,
    ThMeshPhysicalMaterial,
    ThMeshStandardMaterial,
    ThMeshPhongMaterial,
    ThMeshToonMaterial,
    ThMeshNormalMaterial,
    ThMeshLambertMaterial,
    ThMeshDepthMaterial,
    ThMeshDistanceMaterial,
    ThMeshBasicMaterial,
    ThMeshMatcapMaterial,
    ThLineDashedMaterial,
    ThLineBasicMaterial,
    ThMaterial,
    ThInstancedBufferGeometry,
    ThBufferGeometry,
    ThBoxGeometry,
    ThCircleGeometry,
    ThConeGeometry,
    ThCylinderGeometry,
    ThDodecahedronGeometry,
    ThEdgesGeometry,
    ThExtrudeGeometry,
    ThIcosahedronGeometry,
    ThLatheGeometry,
    ThOctahedronGeometry,
    ThParametricGeometry,
    ThPlaneGeometry,
    ThPolyhedronGeometry,
    ThRingGeometry,
    ThShapeGeometry,
    ThSphereGeometry,
    ThTetrahedronGeometry,
    ThTextGeometry,
    ThTorusGeometry,
    ThTorusKnotGeometry,
    ThTubeGeometry,
    ThWireframeGeometry,
    ThDeviceOrientationControls,
    ThDragControls,
    ThFirstPersonControls,
    ThFlyControls,
    ThOrbitControls,
    ThMapControls,
    ThPointerLockControls,
    ThTrackballControls,
    ThTransformControls,
  ],
  exports: [
    ThAudioListener,
    ThPositionalAudio,
    ThAudio,
    ThStereoCamera,
    ThPerspectiveCamera,
    ThOrthographicCamera,
    ThCubeCamera,
    ThArrayCamera,
    ThCamera,
    ThObject3D,
    ThImmediateRenderObject,
    ThSpotLightHelper,
    ThSkeletonHelper,
    ThPointLightHelper,
    ThHemisphereLightHelper,
    ThGridHelper,
    ThPolarGridHelper,
    ThDirectionalLightHelper,
    ThCameraHelper,
    ThBoxHelper,
    ThBox3Helper,
    ThPlaneHelper,
    ThArrowHelper,
    ThAxesHelper,
    ThSpotLight,
    ThPointLight,
    ThRectAreaLight,
    ThHemisphereLight,
    ThDirectionalLight,
    ThAmbientLight,
    ThLight,
    ThAmbientLightProbe,
    ThHemisphereLightProbe,
    ThLightProbe,
    ThSprite,
    ThLOD,
    ThInstancedMesh,
    ThSkinnedMesh,
    ThBone,
    ThMesh,
    ThLineSegments,
    ThLineLoop,
    ThLine,
    ThPoints,
    ThGroup,
    ThScene,
    ThShadowMaterial,
    ThSpriteMaterial,
    ThRawShaderMaterial,
    ThShaderMaterial,
    ThPointsMaterial,
    ThMeshPhysicalMaterial,
    ThMeshStandardMaterial,
    ThMeshPhongMaterial,
    ThMeshToonMaterial,
    ThMeshNormalMaterial,
    ThMeshLambertMaterial,
    ThMeshDepthMaterial,
    ThMeshDistanceMaterial,
    ThMeshBasicMaterial,
    ThMeshMatcapMaterial,
    ThLineDashedMaterial,
    ThLineBasicMaterial,
    ThMaterial,
    ThInstancedBufferGeometry,
    ThBufferGeometry,
    ThBoxGeometry,
    ThCircleGeometry,
    ThConeGeometry,
    ThCylinderGeometry,
    ThDodecahedronGeometry,
    ThEdgesGeometry,
    ThExtrudeGeometry,
    ThIcosahedronGeometry,
    ThLatheGeometry,
    ThOctahedronGeometry,
    ThParametricGeometry,
    ThPlaneGeometry,
    ThPolyhedronGeometry,
    ThRingGeometry,
    ThShapeGeometry,
    ThSphereGeometry,
    ThTetrahedronGeometry,
    ThTextGeometry,
    ThTorusGeometry,
    ThTorusKnotGeometry,
    ThTubeGeometry,
    ThWireframeGeometry,
    ThDeviceOrientationControls,
    ThDragControls,
    ThFirstPersonControls,
    ThFlyControls,
    ThOrbitControls,
    ThMapControls,
    ThPointerLockControls,
    ThTrackballControls,
    ThTransformControls,
  ],
})
export class NgxThreeGeneratedModule {}
