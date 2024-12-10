//
//  RCTNativeBatteryModule.m
//  MobileCourse
//
//  Created by Edwin Garcés Saucedo on 09/12/24.
//

#import "RCTNativeBatteryModule.h"

@interface RCTNativeBatteryModule()
@end

@implementation RCTNativeBatteryModule

RCT_EXPORT_MODULE(NativeBatteryModule)

- (instancetype)init
{
 if ((self = [super init])) {

   [[UIDevice currentDevice] setBatteryMonitoringEnabled:YES];

 }
 return self;
}

- updateBatteryLevel:(RCTResponseSenderBlock)callback
{
 callback(@[[self getBatteryStatus]]);
}

-(NSDictionary*)getBatteryStatus
{

 float batteryLevel = [UIDevice currentDevice].batteryLevel;

 NSObject* currentLevel = nil;

 currentLevel = [NSNumber numberWithFloat:(batteryLevel * 100)];

 NSMutableDictionary* batteryData = [NSMutableDictionary dictionaryWithCapacity:2];

 [batteryData setObject:currentLevel forKey:@"level"];
 return batteryData;

}

@end
